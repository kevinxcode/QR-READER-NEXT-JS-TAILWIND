const SpinnerSub = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="w-8 h-8 border-t-4 border-gray-600 border-solid rounded-full animate-spin">
        <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default SpinnerSub;
