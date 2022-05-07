const itemsLink = AppLink.create(app, {
    label: 'Items',
    destination: '/items',
  });
  
  const settingsLink = AppLink.create(app, {
    label: 'Settings',
    destination: '/settings',
  });
  
  // create NavigationMenu with no active links
  
  const navigationMenu = NavigationMenu.create(app, {
    items: [itemsLink, settingsLink],
  });
  
  // or create a NavigationMenu with the settings link active
  
  const navigationMenu1 = NavigationMenu.create(app, {
    items: [itemsLink, settingsLink],
    active: settingsLink,
  });
  