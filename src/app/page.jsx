import RotateAnimation from "@/components/RotateAnimation";

export default function Home() {
  return (
    <main className="h-[2000px]">
      <div className="flex p-16 gap-5">
        <div className="relative">
          <div className="sticky top-[64px]">
            <RotateAnimation duration={2.5} rotation={270} />
          </div>
        </div>
        <div className="bg-red-500 h-[1000px] grow"></div>
      </div>
      <div className="bg-yellow-300 h-[300px]" />

      <div className="flex gap-5 mt-5">
        <div className="card-container">
          <div className="card-image" />
          <div className="card-body">
            <div className="card-body-upper">
              <h1>Title</h1>
              <p></p>
            </div>
            <div className="card-body-lower">
              <div className="people-container">
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name</p>
                </div>
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name Name </p>
                </div>
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name Name Name</p>
                </div>
              </div>

              <div className="progress">
                <span>83% Complete</span>
                <div className="grow h-1 bg-yellow-500"></div>
              </div>

              <div className="rate-and-module">
                <div className="rate-and-module-children">
                  <span>4.5</span>
                  <div className="w-14 h-4 bg-green-300"></div>
                </div>

                <div className="rate-and-module-children">
                  <i className="icon"></i>
                  <span>5 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image" />
          <div className="card-body">
            <div className="card-body-upper">
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                excepturi, esse corrupti laborum ipsam suscipit doloribus
                laboriosam cupiditate tempora
              </p>
            </div>
            <div className="card-body-lower">
              <div className="people-container">
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name</p>
                </div>
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name Name </p>
                </div>
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name Name Name</p>
                </div>
              </div>

              <div className="progress">
                <span>83% Complete</span>
                <div className="grow h-1 bg-yellow-500"></div>
              </div>

              <div className="rate-and-module">
                <div className="rate-and-module-children">
                  <span>4.5</span>
                  <div className="w-14 h-4 bg-green-300"></div>
                </div>

                <div className="rate-and-module-children">
                  <i className="icon"></i>
                  <span>5 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-image" />
          <div className="card-body">
            <div className="card-body-upper">
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                excepturi, esse corrupti laborum ipsam suscipit doloribus
                laboriosam cupiditate tempora
              </p>
            </div>
            <div className="card-body-lower">
              <div className="people-container">
                <div className="name-container">
                  <i className="icon"></i>
                  <p className="name">Name</p>
                </div>
              </div>

              <div className="progress">
                <span>83% Complete</span>
                <div className="grow h-1 bg-yellow-500"></div>
              </div>

              <div className="rate-and-module">
                <div className="rate-and-module-children">
                  <span>4.5</span>
                  <div className="w-14 h-4 bg-green-300"></div>
                </div>

                <div className="rate-and-module-children">
                  <i className="icon"></i>
                  <span>5 Modules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
