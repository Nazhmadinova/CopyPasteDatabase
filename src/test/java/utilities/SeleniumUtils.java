package utilities;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.IOException;

public class SeleniumUtils {

    public static void pauseWithTreadSleep(int seconds){
        try {
            Thread.sleep(seconds * 1000);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public static void explicitWaitForVisibility(WebElement element, int seconds) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void explicitWaitForInvisibility(WebElement element, int seconds){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.invisibilityOf(element));

    }

    public static XSSFCell getCell(String path, String sheetName, int row, int givenCell) throws IOException {

        FileInputStream fileInputStream = new FileInputStream(path);;
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);;
        XSSFSheet sheet = workbook.getSheet(sheetName);;
        XSSFCell cell = sheet.getRow(row).getCell(givenCell);;

        return cell;

    }

}