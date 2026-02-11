import search from '../../assets/search.svg';

export default function Header() {
  return (
    <nav className="relative flex items-center justify-between bg-[#f9f9f9] p-4 shadow-md max-w-7xl  mx-auto w-sm lg:w-7xl mt-3 mb-4 rounded-3xl">
      <div>
        <h1 className="text-xl font-bold text-gray-700">MiniCRM</h1>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-38 lg:w-full max-w-md">
        <img
          src={search}
          alt="Search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-900 w-5 h-5 pointer-events-none"
        />

        <input
          type="text"
          placeholder="Search by Id, Email or Phone"
          className="pl-11 py-1 text-gray-600 placeholder-gray-600 max-w-md w-full rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-transparent bg-[#ececec]"
        />
      </div>
      <div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <div>
            <button className="px-3 py-1 cursor-pointer">
              <img
                src="https://img.icons8.com/?size=100&id=9GvqBKJLhLDa&format=png&color=000000"
                alt="notification"
                className="w-6 h-6"
              />
            </button>
          </div>
          <stoke className="text-gray-600 text-2xl">|</stoke>
          <div className="flex flex-row items-center justify-center">
            <button className="flex flex-row items-center justify-center cursor-pointer">
              <div className="flex flex-col text-gray-600 items-end">
                <h3 className="font-light text-sm">User</h3>
                <p className="font-light text-sm">Admin</p>
              </div>
            </button>

            <button className="flex items-center justify-center cursor-pointer">
              <img
                src="https://img.icons8.com/?size=100&id=20749&format=png&color=000000"
                alt="user"
                className="w-10 h-10 rounded-full ml-3"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
