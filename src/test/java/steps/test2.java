package steps;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class test2 {

    public static void main(String[] args) {


        String url = "jdbc:oracle:thin:@ec2-18-220-200-214.us-east-2.compute.amazonaws.com:1521:xe";
        String username = "hr";
        String password = "hr";


        try {
            Connection connection = DriverManager.getConnection(url,username,password);
            System.out.println("Connection successful!");
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet resultSet = statement.executeQuery("select first_name, last_name, salary from employees");
            ResultSetMetaData metaData = resultSet.getMetaData();
            int num = metaData.getColumnCount();
            List<Map<Object, Object>> data = new ArrayList<>();

            while (resultSet.next()){
                Map<Object, Object> map = new HashMap<>();
                for(int i = 1; i <= num; i++) {
                    map.put(metaData.getColumnName(i), resultSet.getObject(i));
                }
                data.add(map);
            }

            connection.close();
            statement.close();
            resultSet.close();
        } catch (SQLException e) {
            System.out.println("Connection failed");
        }


    }

}
