package utilities;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DBUtility {

    private static Connection connection;
    private static Statement statement;
    private static ResultSet resultSet;

    public static void createConnection(){

        try {
            switch (Config.getProperties("dbType")){
                case "oracle":
                    connection = DriverManager.getConnection(Config.getProperties("oracleURL"),
                            Config.getProperties("oracleUsername"), Config.getProperties("oraclePassword"));
                    break;
                case "mysql":
                    break;
                default:
                    connection = null;
            }
        }catch (SQLException e) {
            e.printStackTrace();
        }

    }

    public static List<Map<Object,Object>> executeQuery(String query){
        List<Map<Object, Object>> data = new ArrayList<>();
        try {
            statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            resultSet = statement.executeQuery(query);
            ResultSetMetaData metaData = resultSet.getMetaData();
            int num = metaData.getColumnCount();

            while (resultSet.next()){
                Map<Object, Object> map = new HashMap<>();
                for(int i = 1; i <= num; i++){
                    map.put(metaData.getColumnName(i), resultSet.getObject(i));

                }
                data.add(map);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return data;
    }

    public static void close(){

        try {

            if(connection != null)
            connection.close();

            if(statement != null)
            statement.close();

            if(resultSet != null)
            resultSet.close();

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

}
