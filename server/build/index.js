"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const app = (0, express_1.default)();
const port = 8080;
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({
        headless: "new",
        args: ["--no-sandbox"]
    });
    const page = yield browser.newPage();
    yield page.goto("https://yle.fi/t/18-215833/fi");
    yield page.click(`button[aria-label="Vain välttämättömät"]`);
    // Select the main container for news articles
    const mainContainerSelector = '.GenericStory__Lefty-sc-3c19415d-4.jzOvCH';
    // Extract information from all news articles in the selected container
    const newsList = yield page.$$eval(mainContainerSelector, (newsElements) => {
        return newsElements.map((newsElement) => {
            var _a, _b, _c, _d;
            const newsTitle = ((_a = newsElement.querySelector('.CardHeading__Heading-sc-c806b1c0-0.edmqUa a')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
            const newsDate = ((_b = newsElement.querySelector('.DateTime___StyledTime-sc-be5c43e0-0.JyKhN')) === null || _b === void 0 ? void 0 : _b.textContent) || '';
            const newsCategory = ((_c = newsElement.querySelector('.Tag__Label-sc-10f4ee8e-0.dpErSM')) === null || _c === void 0 ? void 0 : _c.textContent) || '';
            const newsLink = ((_d = newsElement.querySelector('.CardHeading__Heading-sc-c806b1c0-0.edmqUa a')) === null || _d === void 0 ? void 0 : _d.getAttribute('href')) || '';
            const wholeLink = "https://yle.fi" + newsLink;
            return { title: newsTitle, date: newsDate, category: newsCategory, link: wholeLink };
        });
    });
    yield browser.close();
    return newsList;
});
app.use((0, cors_1.default)());
app.use(express_1.default.static("client/build"));
app.get("/api/data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newsData = yield fetchData();
        res.json(newsData);
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
app.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
