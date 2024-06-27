import React from "react";

const CardList = () => {
  return (
    <div className="flex w-full overflow-x-auto gap-5 mt-5">
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
  );
};

export default CardList;
