import React from "react"


ReactDOM.render(
    <Popover>
      <button>The Target</button>
      <div>
        ...
        <Popover>
          <button>The Target</button>
          <div>
            ...
            <Popover>
              <button>The Target</button>
              <div>The content</div>
            </Popover>
            ...
          </div>
        </Popover>
        ...
      </div>
    </Popover>,
    document.body
  );