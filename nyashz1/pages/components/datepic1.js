import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div style={{height: '100px'}}>
  <Button
    primary
    connectedDisclosure={{
      accessibilityLabel: 'Other save actions',
      actions: [{MainContent}],
    }}
  >
    Save
  </Button>
</div>
    );
  }
}
