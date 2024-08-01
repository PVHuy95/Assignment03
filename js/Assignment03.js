const test = () => {
    var fName = document.getElementById("txtName").value;
    var reName = /^[A-Za-z ]+$/;
    if(!reName.test(fName)){
        alert("Full name field can't left blank!");
        document.getElementById("txtName").focus();
        return false;
    }
    var diaChi = document.getElementById("aDD").value;
    if(diaChi == ""){
        alert("Address field can't left blank!");
        document.getElementById("aDD").focus();
        return false;
    }
    var Email = document.getElementById("email").value;
    var reEmail = /^\w+[@]\w+[.]\w{3}([.]\w{2})?$/;
    if(!reEmail.test(Email)){
        alert("Email field can't left blank and must correct format");
        document.getElementById("email").focus();
        return false;
    }
    var Phone = document.getElementById("phone").value;
    var rePhone = /^\d{8,12}$/;
    if(!rePhone.test(Phone)){
        alert("Telephone fields must be digits in range 8 - 12");
        document.getElementById("phone").focus();
        return false;
    }
    var birthday = document.getElementById("BD").value;
    var gioitinh = document.getElementsByName("sex");
    var Gioitinh;
    for(var i = 0; i < gioitinh.length; i++){
        if(gioitinh[i].checked){
            Gioitinh = gioitinh[i].value;
            break;
        }
    }
    var Quocgia = document.getElementById("country");
    var quocgiaValue = Quocgia.options[Quocgia.selectedIndex].text;
    alert("Registed Form"
        + "\n+++++++++++++++++++++++"
        + "\nName: "+ fName
        + "\nGender: "+ Gioitinh
        + "\nDay Of Birth: "+ birthday
        + "\nAddress: "+ diaChi
        + "\nMail: "+ Email
        + "\nPhone: "+ Phone
        + "\nCountry: "+ quocgiaValue
    );
}

