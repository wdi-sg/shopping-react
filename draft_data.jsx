//form object
let formObject = {
    text_fields: [{id: 1, form_id: 1, title: 'name', position: 1}],
    date_fields: [{id: 1, form_id: 1, title: 'date of birth', position: 2}],
    address_fields: [
        {id: 1, form_id: 1, title: 'address', position: 3} //get from google maps
    ],
    email_fields: [{id: 1, form_id: 1, title: 'email', position: 5}],
    phone_fields: [{id: 1, form_id: 1, title: 'handphone', position: 4}]
};
//flatten object
let formArray = [
    {
        text_field_id: 1,
        form_id: 1,
        title: 'name',
        position: 1,
        field_type: 'text'
    }
];
