const myQr = () => {
  return (
    <div className="w-full max-w-full px-3 mt-3 border-2">
      <div className=" flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div className="p-4 mx-6 mb-0 text-center bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
            className="object-contain hover:object-scale-down"
          />
        </div>
        <div className="flex-auto p-4 pt-0 text-center">
          <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
          <h5 className="mb-0 font-bold">KEVIN ALNIZAR</h5>
          <span className="leading-tight text-xs">Belong Interactive</span>
        </div>
      </div>
    </div>
  );
};
export default myQr;
