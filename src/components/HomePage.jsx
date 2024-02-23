import text from "./../assets/inkpx-word-art (1).png";
import "./../App.css"

export const Header = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1641840296052-1b41c4bce493?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 h-screen">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-2 sm:mb-2 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                Capti
                <span className="text-teal-accent-400 overline">GEN</span>
              </h2>
              <p className="max-w-xl mb-6 text-base text-gray-100 md:text-lg">
                Captivate, connect, convert. Your video's secret weapon for
                global engagement and A Effortless Perfect solution for
                generating subtitles. Start now!
              </p>
              <div className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                **Currently on Beta
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-gray-900 bg-opacity-25 rounded-3xl shadow-2xl p-7 sm:p-10 flex flex-col backdrop-blur border border-white">
                <h2 className="mb-4 text-xl font-semibold text-white sm:text-center sm:mb-6 sm:text-xl">
                  Heyy Fellaa!! CaptiGen is currently free to use.
                </h2>
                <img
                  className="mb-4 text-xl font-semibold text-white sm:text-center sm:mb-6 sm:text-2xl"
                  src={text}
                />
                <button class="cssbuttons-io text-center border border-gray-100">
                  <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Start From Here...
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
