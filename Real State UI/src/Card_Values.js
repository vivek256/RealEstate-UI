const cardValues = [

{id:0,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
price:'$2,095',name:'Palm Harbor',property_type:'Houses',address:'2699 Green Valley,Highland Lake,FL',beds:3,bathroom:2,area:'6x7.5',moveInDate:'2022-12-4'},

{id:1,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$2,700',name:'Beverly Springfield',property_type:'Houses',address:'2821 Lake Sevilla,Palm Harbor,TX',beds:2,bathroom:2,area:'8x10',moveInDate:'2022-12-28'},

{id:2,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$4,550',name:'Faulkner Ave',property_type:'Houses',address:'909 Woodland,St. Michigan,IN',beds:3,bathroom:2,area:'5x7',moveInDate:'2023-1-4'},

{id:3,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$2,400',name:'Cove Red',property_type:'Houses',address:'243 Curlew Road,Palm Harbor,TX',beds:2,bathroom:1,area:'6x8',moveInDate:'2022-12-10'},

{id:4,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$1,500',name:'The Old Steele',property_type:'Houses',address:'103 Lake Shores,Michigan,IN',beds:2,bathroom:2,area:'5x7.5',moveInDate:'2022-12-16'},

{id:5,location:'NewYork,USA',url:'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$1,600',name:'Tarpon Bay',property_type:'Houses',address:'210 US Highway,Highland Lake,FL',beds:4,bathroom:1,area:'5x7',moveInDate:'2023-2-3'},

{id:6,location:'London,UK',url:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$2,700',name:'Beverly Springfield',property_type:'Houses',address:'2821 Lake Sevilla,Palm Harbor,TX',beds:2,bathroom:2,area:'8x10',moveInDate:'2023-2-20'},

{id:7,location:'London,UK',url:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$4,550',name:'Faulkner Ave',property_type:'Houses',address:'909 Woodland,St. Michigan,IN',beds:3,bathroom:2,area:'5x7',moveInDate:'2022-12-30'},

{id:8,location:'London,UK',url:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$2,400',name:'Cove Red',property_type:'Houses',address:'243 Curlew Road,Palm Harbor,TX',beds:2,bathroom:1,area:'6x8',moveInDate:'2022-12-10'},

{id:9,location:'London,UK',url:'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$1,500',name:'The Old Steele',property_type:'Houses',address:'103 Lake Shores,Michigan,IN',beds:2,bathroom:2,area:'5x7.5',moveInDate:'2020-12-4'},

{id:10,location:'London,UK',url:'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80',
price:'$1,600',name:'Tarpon Bay',property_type:'Houses',address:'210 US Highway,Highland Lake,FL',beds:4,bathroom:1,area:'5x7',moveInDate:'2021-12-4'},

{id:11,location:'London,UK',url:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$4,550',name:'Faulkner Ave',property_type:'Houses',address:'909 Woodland,St. Michigan,IN',beds:3,bathroom:2,area:'5x7',moveInDate:'2022-12-1'},

{id:12,location:'London,UK',url:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$2,400',name:'Cove Red',property_type:'Houses',address:'243 Curlew Road,Palm Harbor,TX',beds:2,bathroom:1,area:'6x8',moveInDate:'2020-12-4'},

{id:13,location:'London,UK',url:'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
price:'$1,500',name:'The Old Steele',property_type:'Houses',address:'103 Lake Shores,Michigan,IN',beds:2,bathroom:2,area:'5x7.5',moveInDate:'2023-6-4'},

{id:14,location:'London,UK',url:'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80',
price:'$1,600',name:'Tarpon Bay',property_type:'Villa',address:'210 US Highway,Highland Lake,FL',beds:4,bathroom:1,area:'5x7',moveInDate:'2023-3-4'},

];


function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}


let property_type =  cardValues.map((obj) => obj.property_type)
property_type=removeDuplicates(property_type);

let location = cardValues.map((obj) => obj.location)
location = removeDuplicates(location)

export default cardValues;
export {property_type, location };

