
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

const CreateBudgett = () => {
  const queryClient = useQueryClient();

  const { mutate: useCreateBudgett, isPending } = useMutation({
    mutationFn: async (newBudgett) => {
      const res = await axiosInstance.post("/budgett/add", newBudgett);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['budgetts']); // ← تأكد أنها تتطابق مع BudgettList.jsx
    },
  });

  const units = ["طن", "قنطار"];
  const wilayas = ["تبسة", "سوق اهراس", "خنشلة"];;

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
    useCreateBudgett(inputState, {
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
            <h2>اضافة ارض</h2>
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>إضافةارض جديدة</DialogTitle>
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
                    }}
                  >
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

export default CreateBudgett;