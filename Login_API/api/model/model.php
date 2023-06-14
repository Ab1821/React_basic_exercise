<?php
mysqli_report(MYSQLI_REPORT_STRICT);
class model{
    public $connect ="" ;
    public function __construct(){
        try {
            $this->connect = new mysqli("localhost","root","","masterdatabase");
            $this->connectgro = new mysqli("localhost","root","","grocery");
        } catch (Exception  $e) {
            
            $msg = $e->getMessage();
            if (!file_exists("log")) {
                mkdir("log");
            }
            file_put_contents("log/log.txt","Error Message : ".$msg.PHP_EOL);
        }
        // exit;
    }
    public function select($tbl,$where=''){
        $SQL = "SELECT * FROM $tbl";
        if ($where != '') {
            $SQL .= " WHERE";
            foreach ($where as $key => $value) {
                $SQL .= " $key = '$value' AND";
            }
            $SQL = rtrim($SQL,"AND");
        }
        // echo $SQL;
        $Ex = $this->connect->query($SQL);
        if ($Ex->num_rows > 0) {
            while ($data = $Ex->fetch_object()) {
                $FetchData[] = $data;
            }
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = $FetchData; 
        }else{
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
     }
     public function insert($tbl,$data){
        $clms =implode(",",array_keys($data)) ; 
        $vals = implode("','",$data); 
      $SQL = "INSERT INTO $tbl($clms) VALUES('$vals')";
        $Ex = $this->connect->query($SQL);
        if ($Ex > 0) {
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = 1; 
        }else{
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
    }
     public function update($tbl,$data,$where){
        $SQL = "UPDATE $tbl SET";
        foreach ($data as $dkey => $dvalue) {
            $SQL .= " $dkey = '$dvalue' ,";
        }
        $SQL = rtrim($SQL,",");
        $SQL .= " WHERE";
        foreach ($where as $key => $value) {
            $SQL .= " $key = '$value' AND";
        }
        $SQL = rtrim($SQL,"AND");
        // echo $SQL;
        // exit;
        $Ex = $this->connect->query($SQL);
        if ($Ex > 0) {
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = 1; 
        }else{
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
    }
     public function delete($tbl,$where){
        $SQL = "DELETE FROM $tbl";
        $SQL .= " WHERE";
        foreach ($where as $key => $value) {
            $SQL .= " $key = '$value' AND";
        }
        $SQL = rtrim($SQL,"AND");
        $Ex = $this->connect->query($SQL);
        if ($Ex > 0) {
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = 1; 
        }else{
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
    }
    public function logindata($uname,$pass){ 
        
        $SQL = "SELECT * FROM users WHERE password='$pass' AND (username='$uname' OR email='$uname' OR mobile='$uname')";
        $Ex =$this->connect->query($SQL);
        // echo "<pre>";
        // print_r($Ex);
        // echo "</pre>";
        if ($Ex->num_rows > 0) {
            $Data = $Ex->fetch_object();
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = $Data;
        } else {
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
    }
    public function selectsearch($tbl,$where=''){
        $SQL = "SELECT * FROM $tbl";
        if ($where != '') {
            $SQL .= " WHERE";
            foreach ($where as $key => $value) {
                $SQL .= " $key LIKE '%$value%' OR";
            }
            $SQL = rtrim($SQL,"OR");
        }
        // echo $SQL;
        $Ex = $this->connectgro->query($SQL);
        if ($Ex->num_rows > 0) {
            while ($data = $Ex->fetch_object()) {
                $FetchData[] = $data;
            }
            $ResData["Code"] = 1; 
            $ResData["Msg"] = "Success"; 
            $ResData["Data"] = $FetchData; 
        }else{
            $ResData["Code"] = 0; 
            $ResData["Msg"] = "try again"; 
            $ResData["Data"] = 0;
        }
        return $ResData;
     }
}


?>