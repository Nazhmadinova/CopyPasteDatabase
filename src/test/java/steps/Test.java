package steps;

import org.junit.Assert;
import utilities.DBUtility;
import utilities.SeleniumUtils;
import utilities.TempStorage;

import java.util.List;
import java.util.Map;

public class Test {

    public static void main(String[] args) {
        DBUtility.createConnection();
        List<Map<Object, Object>> teachers = DBUtility.executeQuery("select * FROM teacher WHERE FIRST_NAME = 'Anna' and LAST_NAME = 'Hanna'");
         System.out.println(teachers.get(1));
        DBUtility.close();
        for(Map<Object,Object> teacher: teachers){
            if(teacher.get("FIRST_NAME").toString().equals(TempStorage.getData("FirstName")) &&
                    teacher.get("LAST_NAME").toString().equals(TempStorage.getData("LastName"))){
                Assert.assertEquals(teacher.get("GENDER").toString(), TempStorage.getData("Gender"));
                Assert.assertEquals(teacher.get("EMAIL_ADDRESS"), TempStorage.getData("Email"));
            }else{
                Assert.assertTrue(false);
            }
        }

    }

}
