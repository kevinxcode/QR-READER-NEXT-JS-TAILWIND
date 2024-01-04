const MyProfile = () => {
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
            <strong className="text-slate-700">Employee ID:</strong> (44) 123
            1234 123
          </li>
          <li className=" block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
            <strong className="text-slate-700">Full Name:</strong> Alec M.
            Thompson
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Department :</strong> aaaaa
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Position :</strong> aaaaa
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Email:</strong> kevin.xcode@mail.com
          </li>
          <li className=" block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
            <strong className="text-slate-700">Location:</strong> USA
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MyProfile;