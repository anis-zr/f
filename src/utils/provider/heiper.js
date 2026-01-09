
import moment from "moment";

export const addThounsandsSeparator=(num)=>{
    if(num == null || isNaN(num))
    return ""
  const [integerPart , fractionalPart] = num.toString().split(".")
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,".")
  return fractionalPart
  ? `${formattedInteger}.${fractionalPart}`
   : formattedInteger;
    
  }

export const prepareIncome=(data = [])=>{
  const sorteData = [...data].sort((a,b)=>new Date(a.date)-new Date(b.date))


  const chartData = sorteData.map((item)=>({
mounth:moment(item?.date).format('Do MMM'),
quantite:333,
product:"batata",

  }))
  return chartData
}



