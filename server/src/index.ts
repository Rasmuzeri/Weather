import express, { Application, Request, Response } from "express";
import cors from "cors";
import puppeteer from "puppeteer";

const app: Application = express();
const port: number = 8080;

const fetchData = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("https://yle.fi/t/18-215833/fi");
  await page.click(`button[aria-label="Vain välttämättömät"]`);

  // Select the main container for news articles
  const mainContainerSelector = '.GenericStory__Lefty-sc-3c19415d-4.jzOvCH';

  // Extract information from all news articles in the selected container
  const newsList: any[] = await page.$$eval(mainContainerSelector, (newsElements: Element[]) => {
    return newsElements.map((newsElement) => {
      const newsTitle = newsElement.querySelector('.CardHeading__Heading-sc-c806b1c0-0.edmqUa a')?.textContent || '';
      const newsDate = newsElement.querySelector('.DateTime___StyledTime-sc-be5c43e0-0.JyKhN')?.textContent || '';
      const newsCategory = newsElement.querySelector('.Tag__Label-sc-10f4ee8e-0.dpErSM')?.textContent || '';
      const newsLink = newsElement.querySelector('.CardHeading__Heading-sc-c806b1c0-0.edmqUa a')?.getAttribute('href') || '';
      const wholeLink = "https://yle.fi" + newsLink;

      return { title: newsTitle, date: newsDate, category: newsCategory, link: wholeLink };
    });
  });

  await browser.close();

  return newsList;
};

app.use(cors());
app.use(express.static("client/build"));

app.get("/api/data", async (req: Request, res: Response) => {
  try {
    const newsData = await fetchData();
    res.json(newsData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Connected successfully on port ${port}`);
});