/*import { useState, useEffect } from "react";
import farmersData from "";

const Dashboord = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("Alger"); // الولاية الافتراضية
  const [farmers, setFarmers] = useState([]);
  
  useEffect(() => {
    // تحميل الفلاحين حسب الولاية المحددة
    const filteredFarmers = farmersData.filter(farmer => farmer.wilaya === selectedWilaya);
    setFarmers(filteredFarmers);
  }, [selectedWilaya]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📍 اختر الولاية:</h2>
      <select 
        className="p-2 border rounded-md"
        value={selectedWilaya} 
        onChange={(e) => setSelectedWilaya(e.target.value)}
      >
        <option value="Alger">Alger</option>
        <option value="Oran">Oran</option>
      </select>

      <div className="mt-6">
        {farmers.map(farmer => (
          <FarmerCard key={farmer.id} farmer={farmer} />
        ))}
      </div>
    </div>
  );
};
export default Dashboord;

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { prepareIncome } from "@/utils/provider/heiper";
import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";






import React, { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "sonner";

 const units = ['ha', 'km2', 'm2'];
 const unitt = [ 'Ton', 'Quintal'];



const CreateBudget = () => {
  
     const [value, setValue] = useState('');
      const [valuee, setValuee] = useState('');
      const [unit, setUnit] = useState('ha');
      const [uni, setUni] = useState('Ton');
      const [showUnits, setShowUnits] = useState(false);
      const [showUnit, setShowUnit] = useState(false);
      const [name ,setName]= useState()           
    
      const toggleUnits = () => setShowUnits(!showUnits);
      const toggleUnit = () => setShowUnit(!showUnit);
    
      const handleUnitSelect = (selectedUnit ) => {
        setUnit(selectedUnit);
        setShowUnits(false);
      };
      const handleUnitSelec = (selectedUni ) => {
  
        setShowUnit(false);
        setUni(selectedUni);
      };
    
      const handleChange = (e) => {
        const val = e.target.value;
    
        if (val === '' ||  parseFloat(val) >= 0){
          setValue(val);
        }
       
      
      };
      const handleSubmit = async () => {
        
          if(name && value && valuee )
          toast.success("تم إنشاء الميزانية بنجاح!");
        
          // إغلاق النافذة هنا إذا لزم الأمر
        else{
          toast.error("فشل في إنشاء الميزانية!");
        }
      };
    
      const handleChangee = (e) => {
        const vall = e.target.value; 
      if (vall === '' ||  parseFloat(vall) >= 0) {
        setValuee(vall);
      }
    }    



      const [chartData ,setChartdData]= useState([])
     /* useEffect(()=>{
const result = prepareIncome(transactions)
setChartdData(result)
return()=>{}      },[transactions])
  

return (
    <div>
    <Dialog>
  <DialogTrigger asChild>  
      <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex
         flex-col border-2 border-dashed'>
          <h2 className='text-3xl'>+</h2>
          <h2>Create New Chart</h2>
        </div>
   </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
 


<div className="mt-2">
  <h2 className="text-block font-medium my-1  " >Product</h2>
  <input type="text" className =" border border-gray-300 p-2 rounded-md " placeholder=" Enter Product "
  onChange={(e)=>setName(e.target.value)}
  />
   <h2 className="text-block font-medium my-1  " >Product</h2>
  <select name="gender" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none bg-white" required>
                              <option value="">Select PRODUCT</option>
                            <option value="">CARROTE</option>
                            <option value="Male">DATTE</option>
                            <option value="Female">BATATA</option>
                            <option value="Female">TOMATE</option>
                            
                        </select>

    <h2 className="text-block font-medium my-1  " >Wilaya</h2>
       <select name="gender" onChange={handleChange} 
                            className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none bg-white" required>
                            <option value="">Select Wilaya</option>
                            <option value="Male">Tebessa</option>
                            <option value="Female">Khanshela</option>
                            <option value="Female">Souk Ahras</option>
                            <option value="Female">Batna</option>
                        </select>
</div>
<h2 className="text-block font-medium my-1  " >مساحة المزروعة</h2>
<div style={{ position: 'relative', width: '250px' }}>

  <input
 
    type="number"
    value={value}
    onChange={handleChange}
    placeholder="مساحة المزروعة"
    style={{
      width: '100%',
      paddingRight: '60px',
      paddingLeft: '10px',
      height: '40px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      fontSize: '16px'
    }}
  />


  <div
    onClick={toggleUnits}
    style={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      background: '#f5f5f5',
      padding: '4px 8px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    }}
  >
    {unit}
  </div>

  
  {showUnits && (
    <div
      style={{
        position: 'absolute',
        right: '10px',
        top: '110%',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        zIndex: 5,
        width: '60px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    >
      {units.map((u) => (
        <div
          key={u}
          onClick={() => handleUnitSelect(u)}
          style={{
            padding: '6px 8px',
            cursor: 'pointer',
            fontSize: '14px',
            background: u === unit ? '#e0e0e0' : '#fff'
          }}
        >
          {u}
        </div>
      ))}
    </div>
  )}
</div>


<h2 className="text-block font-medium my-1  " >Product</h2>
    <div style={{ position: 'relative', width: '250px' }}>
   
      <input
     
        type="number"
        value={valuee}
        onChange={handleChangee}
        placeholder="الإنتاج المتوقع
"
        style={{
          width: '100%',
          paddingRight: '60px',
          paddingLeft: '10px',
          height: '40px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />


      <div
        onClick={toggleUnit}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        {uni}
      </div>

     
      {showUnit && (
        <div
          style={{
            position: 'absolute',
            right: '10px',
            top: '110%',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            zIndex: 5,
            width: '60px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          {unitt.map((k) => (
            <div
              key={k}
              onClick={() => handleUnitSelec(k)}
              style={{
                padding: '6px 8px',
                cursor: 'pointer',
                fontSize: '14px',
                background: k=== uni ? '#e0e0e0' : '#fff'
              }}
            >
              {k}
            </div>
          ))}
        </div>
      )}
    </div>

      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter className="sm:justify-start">

          <DialogClose asChild>
          <Button  disabled ={!(name && value && valuee )} className="mt-5 w-full"
          
          onClick = {handleSubmit}
          > create product</Button>
          </DialogClose>   
        
        </DialogFooter>
             


  </DialogContent>
</Dialog>


    </div>
    
  
  )
  
}

export default CreateBudget



// components/CreateBudget.jsx
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { DialogClose } from "@radix-ui/react-dialog";
import axios from "axios";

const CreateBudget = ({ addIncome }) => {
  const units = ['ha', 'km2', 'm2'];
  const [totalAmount,setValue]= useState('')
  const handleChangee = (e) => {
    const val = e.target.value;

    if (val === '' ||  parseFloat(val) >= 0){
      setValue(val);
    }
  }
  const [showUnits, setShowUnits] = useState(false);
  const name=["Tebessa","Souk_Ahras","khanshla"]
  const [form, setForm] = useState({
    name: [],
    totalAmount: "",
    
   });

   const handleUnitSelect = (selectedUnit ) => {
    setUnit(selectedUnit);
    setShowUnits(false);
  };
  const handleChange = (e) => {
    setForm({...prev,[e.target.name]:e.target.name});
  };
  const [unit, setUnit] = useState('ha');


  const toggleUnits = () => setShowUnits(!showUnits);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/vl/income/add", form);
    addIncome(); // لتحديث القائمة أو التنقل
    setForm({ name: "", totalAmount: ""});
  };

  return (
    
<div>
<Dialog>
<DialogTrigger asChild>  
  <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex
     flex-col border-2 border-dashed'>
      <h2 className='text-3xl'>+</h2>
      <h2>Create New Chart</h2>
    </div>
</DialogTrigger>
<DialogContent>
<DialogHeader>
  <DialogTitle>Are you absolutely sure?</DialogTitle>
  <DialogDescription>



<div className="mt-2">



<h2 className="text-block font-medium my-1  " >Wilaya</h2>
   <select value={form.name} onChange={handleChange} 
                        className="w-full pl-10 p-2 border border-gray-300 rounded focus:border-green-500 outline-none bg-white" required>
                        <option value="">Select Wilaya</option>

                        {name.map((na,idx)=>(<option key={idx} value={na}>{na}</option>))}
                   
                    </select>
</div>
<h2 className="text-block font-medium my-1  " >مساحة المزروعة</h2>
<div style={{ position: 'relative', width: '250px' }}>

<input

type="number"
value={totalAmount}
onChange={handleChangee}
placeholder="مساحة المزروعة"
style={{
  width: '100%',
  paddingRight: '60px',
  paddingLeft: '10px',
  height: '40px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px'
}}
/>


<div
onClick={toggleUnits}
style={{
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  background: '#f5f5f5',
  padding: '4px 8px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
}}
>
{unit}
</div>


{showUnits && (
<div
  style={{
    position: 'absolute',
    right: '10px',
    top: '110%',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: 5,
    width: '60px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  }}
>
  {units.map((u) => (
    <div
      key={u}
      onClick={() => handleUnitSelect(u)}
      style={{
        padding: '6px 8px',
        cursor: 'pointer',
        fontSize: '14px',
        background: u === unit ? '#e0e0e0' : '#fff'
      }}
    >
      {u}
    </div>
  ))}
</div>
)}
</div>


<h2 className="text-block font-medium my-1  " >Product</h2>




  </DialogDescription>
</DialogHeader>

<DialogFooter className="sm:justify-start">

      <DialogClose asChild>
      <Button  disabled ={!(name && totalAmount )} className="mt-5 w-full"
      
      onClick = {handleSubmit}
      > create product</Button>
      </DialogClose>   
    
    </DialogFooter>
         


</DialogContent>
</Dialog>


</div>

  );
};

export default CreateBudget





import DatePicker from 'react-datepicker'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useGlobalContext } from '@/utils/provider/axiosinstance';

const CreateBudget = ({ addIncome }) => {

  const units = ['ha', 'km2', 'm2'];
  const wilayas = ["Tebessa", "Souk_Ahras", "Khanshla"];



  const [showUnits, setShowUnits] = useState(false);

  const toggleUnits = () => setShowUnits(!showUnits);

  const handleUnitSelect = (selectedUnit) => {
    setForm(prev => ({ ...prev, unit: selectedUnit }));
    setShowUnits(false);
  };
  const {addIncome, getIncomes, error, setError} = useGlobalContext()
  const [inputState, setInputState] = useState({
      
name:'',
quantite:'',
unit:'',
date:''
  })

  const {name,  quantite, unit, date} = inputState;

  const handleInput = name => e => {
      setInputState({...inputState, [name]: e.target.value})
      setError('')
  }

  const handleSubmit = e => {
      e.preventDefault()
      addIncome(inputState)
      setInputState({
      
          
        name,
        quantite,
        unit,
        date 
      })}






  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex flex-col border-2 border-dashed'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Chart</h2>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              <div className="mt-2">
                <h2 className="text-block font-medium my-1">Wilaya</h2>
                <select
                  name=""
                  value={inputState.name}
                  onChange={handleInput}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value={wilayas}>Select Wilaya</option>
                  {wilayas.map((na, idx) => (
                    <option key={idx} value={na}>{na}</option>
                  ))}
                </select>
              </div>
              <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
              <h2 className="text-block font-medium my-1">مساحة المزروعة</h2>
              <div style={{ position: 'relative', width: '250px' }}>
                <input
                  name="quantite"
                  type="number"
                  value={quantite}
                  onChange={handleInput('quantite')}
                  placeholder="مساحة المزروعة"
                  style={{
                    width: '100%',
                    paddingRight: '60px',
                    paddingLeft: '10px',
                    height: '40px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                    fontSize: '16px'
                  }}
                />
                <div
                  onClick={toggleUnits}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: '#f5f5f5',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}>
                  {unit}
                </div>
                {showUnits && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '110%',
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      zIndex: 5,
                      width: '60px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {units.map((u) => (
                      <div
                        key={u}
                        onClick={() => handleUnitSelect(u)}
                        style={{
                          padding: '6px 8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          background: u === handleInput('unit') ? '#e0e0e0' : '#fff'
                        }}
                      >
                        {u}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <h2 className="text-block font-medium my-1">Product</h2>
             
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(inputState.name && inputState.quantite && inputState.unit && inputState.date)}
                className="mt-5 w-full"
                onClick={handleSubmit}
              >
                Create Product
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;





import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useGlobalContext } from '@/utils/provider/GlobalProvider';

 // استورد الكونتكست بشكل صحيح

const CreateBudget = () => {
 // const { CreateBudget,deleteBudget,budgets, updateBudget, setError } = useGlobalContext();
  
  // تعريف المتغيرات
  const units = ['ha', 'km2', 'm2'];
  const wilayas = ["Tebessa", "Souk_Ahras", "Khanshla"];

  // حالة واجهة المستخدم
  const [showUnits, setShowUnits] = useState(false);
  
  // حالة المدخلات
  const [inputState, setInputState] = useState({
    wilaya: "", // الولاية
    quantite: '', // المساحة
   unit:''
   
  
  });

  // وظائف التحكم
  const toggleUnits = () => setShowUnits(!showUnits);
  
  const handleUnitSelect = (selectedUnit) => {
    setInputState(prev => ({ ...prev, unit: selectedUnit }));
    setShowUnits(false);
  };

  const handleChange = (e) => {
    setInputState({...inputState, [e.target.name]: e.target.value});
    setError && setError('');
  };

  const handleSubmit = async(e) => {
    await CreateBudget(inputState)
 
    e.preventDefault();
    addIncome(inputState);
    // إعادة تعيين الحقول بعد الإرسال
    setInputState({
      wilaya: "",
      quantite: '',
      unit:""
    
    });
  };

   
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex flex-col border-2 border-dashed'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Chart</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>إضافة ميزانية جديدة</DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <h2 className="text-block font-medium my-1">الولاية</h2>
                <select
                  name="name"
                  value={inputState.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">اختر الولاية</option>
                  {wilayas.map((wilaya, idx) => (
                    <option key={idx} value={wilaya}>{wilaya}</option>
                  ))}
                </select>
              </div>

        

              <div className="mt-4">
                <h2 className="text-block font-medium my-1">المساحة المزروعة</h2>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    name="quantite"
                    type="number"
                    value={inputState.quantite}
                    onChange={handleChange}
                    placeholder="المساحة المزروعة"
                    style={{

width: '100%',
                      paddingRight: '60px',
                      paddingLeft: '10px',
                      height: '40px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '16px'
                    }}
                  />
                  <div
                    onClick={toggleUnits}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      background: '#f5f5f5',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}>
                    {inputState.unit}
                  </div>
                  {showUnits && (
                    <div
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '110%',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        zIndex: 5,
                        width: '60px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {units.map((u) => (
                        <div
                          key={u}
                          onClick={() => handleUnitSelect(u)}
                          style={{
                            padding: '6px 8px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            background: u === inputState.unit ? '#e0e0e0' : '#fff'
                          }}
                        >
                          {u}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start mt-4">
            <DialogClose asChild>
              <Button
                disabled={!(inputState.wilaya && inputState.quantite)}
                className="mt-2 w-full"
                onClick={handleSubmit}
              >
                إضافة الميزانية
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;








import { useGlobalContext } from "@/utils/provider/GlobalProvider";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const CreateBudget = () => {
  const { createBudget, error, setError } = useGlobalContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    wilaya: "",
    totalArea: "",
    areaUnit: "ha",
  });

  const wilayas = ["تبسة", "سوق أهراس", "خنشلة"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBudget(formData);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">إنشاء ميزانية جديدة</h2>

      {error && (
        <div className="bg-red-100 text-red-600 px-4 py-2 mb-4 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
       
        <div>
          <label className="block text-gray-700 mb-1">اختر الولاية:</label>
          <select
            name="state"
            value={formData.wilayas}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">-- اختر ولاية --</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">المساحة الكلية:</label>
          <input
            type="number"
            name="totalArea"
            value={formData.totalArea}
            onChange={handleChange}
            placeholder="أدخل المساحة"
            className="w-full border rounded px-3 py-2"
            min={0}
            required
          />
        </div>

        
        <div>
          <label className="block text-gray-700 mb-1">وحدة المساحة:</label>
          <select
            name="areaUnit"
            value={formData.areaUnit}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="ha">هكتار (ha)</option>
            <option value="Ton">طن (Ton)</option>
            <option value="m²">متر مربع (m²)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          إنشاء
        </button>
      </form>
    </div>
  );
};

export default CreateBudget;


*/







import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/utils/provider/axios";



const CreateBudget = () => {
  const queryClient = useQueryClient();

  const { mutate: useCreateBudget, isPending } = useMutation({
    mutationFn: async (newBudget) => {
      const res = await axiosInstance.post("/budget/add", newBudget);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['budgets']);
    },
  });

  const units =   ['هكتار',"ار",'متر مربع']
  const wilayas = ["تبسة", "سوق اهراس", "خنشلة"];

  const [showUnits, setShowUnits] = useState(false);
  const [inputState, setInputState] = useState({
    wilaya: "",
    quantite: '',
    unit: ''
  });

  const toggleUnits = () => setShowUnits(!showUnits);

  const handleUnitSelect = (selectedUnit) => {
    setInputState(prev => ({ ...prev, unit: selectedUnit }));
    setShowUnits(false);
  };

  const handleChange = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    useCreateBudget(inputState, {
      onSuccess: () => {
        setInputState({ wilaya: "", quantite: "", unit: "" });
      }
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className='bg-slate-100 p-10 rounded-md items-center cursor-pointer hover:shadow-md flex flex-col border-2 border-dashed'>
            <h2 className='text-3xl'>+</h2>
            <h2>اضافة ارض </h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>اضافةارض  جديدة حسب الولاية </DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <h2 className="text-block font-medium my-1">الولاية</h2>
                <select
                  name="wilaya"
                  value={inputState.wilaya}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">اختر الولاية</option>
                  {wilayas.map((wilaya, idx) => (
                    <option key={idx} value={wilaya}>{wilaya}</option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <h2 className="text-block font-medium my-1">المساحة المزروعة</h2>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    name="quantite"
                    type="number"
                    value={inputState.quantite}
                    onChange={handleChange}
                    placeholder="المساحة المزروعة"
                    style={{
                      width: '100%',
                      paddingRight: '60px',
                      paddingLeft: '10px',
                      height: '40px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '16px'
                    }}
                  />
                  <div
                    onClick={toggleUnits}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      background: '#f5f5f5',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      cursor: 'pointer',


fontSize: '14px'
                    }}>
                    {inputState.unit}
                  </div>
                  {showUnits && (
                    <div
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '110%',
                        background: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        zIndex: 5,
                        width: '60px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {units.map((u) => (
                        <div
                          key={u}
                          onClick={() => handleUnitSelect(u)}
                          style={{
                            padding: '6px 8px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            background: u === inputState.unit ? '#e0e0e0' : '#fff'
                          }}
                        >
                          {u}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start mt-4">
            <DialogClose asChild>
              <Button
                disabled={!(inputState.wilaya && inputState.quantite)}
                className="mt-2 w-full"
                onClick={handleSubmit}
              >
                {isPending ? "جاري الإضافة..." : "إضافة الميزانية"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;