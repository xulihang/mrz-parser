function parse(a, b){
    a=fillFillers(a);
    b=fillFillers(b);
    let doc_type = a.slice(0,2);
    let country = a.slice(2,5);
    let surname_names = a.slice(5,44).split('<<', 2);
    if (surname_names.length < 2){
        surname_names.push('');
    }
    surname = surname_names[0];
    names = surname_names[1];
    names = names.replaceAll('<', ' ').trim();
    surname = surname.replaceAll('<', ' ').trim();
    number = b.slice(0,9);
    check_number = b.charAt(9);
    nationality = b.slice(10,13);
    date_of_birth = b.slice(13,19);
    check_date_of_birth = b.charAt(19);
    sex = b.charAt(20);
    expiration_date = b.slice(21,27);
    check_expiration_date = b.charAt(27);
    personal_number = b.slice(28,42);
    check_personal_number = b.charAt(42);
    check_composite = b.charAt(43);

    let result = {};
    result["surname"] = surname;
    result["names"] = names;
    result["country"] = country;
    result["doc_type"] = doc_type;
    result["number"] = number;
    result["check_number"] = check_number;
    result["date_of_birth"] = date_of_birth;
    result["check_date_of_birth"] = check_date_of_birth;
    result["sex"] = sex;
    result["expiration_date"] = expiration_date;
    result["personal_number"] = personal_number;
    result["check_personal_number"] = check_personal_number;
    result["check_composite"] = check_composite;
    return result;
}

function fillFillers(s){
    while (s.length<44) {
        s = s + "<";
    }
    return s;
}