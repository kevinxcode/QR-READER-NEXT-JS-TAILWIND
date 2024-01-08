import React, { useEffect, useState } from "react";
const MyProfile = () => {
  const [isNik, setisNik] = useState("");
  const [isName, setisName] = useState("");
  const [isDept, setisDept] = useState("");
  const [isJab, setisJab] = useState("");
  const [isEmail, setisEmail] = useState("");

  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/kevinxcode/JSON-Example/main/ocean/employee-profile.json",
      );
      const jsonData = await response.json();

      setisNik(jsonData.details[0]._nik);
      setisName(jsonData.details[0]._name);
      setisDept(jsonData.details[0]._dept);
      setisJab(jsonData.details[0]._jab);
      setisEmail(jsonData.details[0]._email);
    } catch (error) {}
  };
  return (
    <div className="w-full max-w-full px-3 ">
      <div className=" flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
          <div className="flex flex-wrap -mx-3">
            <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
              <h6 className="mb-0">Profile Information</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto p-4">
        <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Employee ID : </strong>
            {isNik}
          </li>
          <li className=" block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
            <strong className="text-slate-700">Full Name : </strong> {isName}
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Department : </strong> {isDept}
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Position : </strong> {isJab}
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Email : </strong> {isEmail}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;
