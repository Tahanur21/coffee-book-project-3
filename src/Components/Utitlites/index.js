import toast from "react-hot-toast";

// getValue
const getValue = ()=>{
    const allData = localStorage.getItem('favourities');
    if(allData){
        const favourities = JSON.parse(allData);
        return favourities;
    }
    else{
        return [];
    }
}
// addValue
const addLocalStorage = (coffee) =>{
    const favourities = getValue();
    const isExist = favourities.find(item=>
        item.id === coffee.id
    )
    if(isExist){
        toast.error('Already added!');
        return
    }
    favourities.push(coffee);
    localStorage.setItem('favourities',JSON.stringify(favourities));
    toast.success('Item added!');

}

// removeData
const removeData =(data)=>{
    const favourities = getValue();
    const removItems = favourities.filter(item=>item.id != data.id);
    localStorage.setItem('favourities',JSON.stringify(removItems));
}

export {addLocalStorage, getValue,removeData}