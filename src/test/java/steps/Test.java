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
        List<Map<Object, Object>> teachers = DBUtility.executeQuery("select * FROM teacher");
         System.out.println(teachers.get(1));
        DBUtility.close();
        for(Map<Object,Object> teacher: teachers){
            if(teacher.get("FIRST_NAME").toString().equals("Anna") &&
                    teacher.get("LAST_NAME").toString().equals("Hanna")){
                Assert.assertEquals(teacher.get("GENDER").toString(), "Female");
                Assert.assertEquals(teacher.get("EMAIL_ADDRESS"), "annahanna@gmail.com");
            }else{
                Assert.assertTrue(false);
            }
        }

    }

}
