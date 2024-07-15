enum BackgroundClass {
   About = 'bg-reseda_green',
   Contact = 'bg-blush',
   Home = 'bg-khaki',
}

enum HeaderText {
   About = 'About Me',
   Contact = 'Contact Me',
   Home = "Hi, I'm Eric Stratton.",
}

type PageConfig = {
   [key: string]: {
      headerText: HeaderText;
      bgClass: BackgroundClass;
   };
};

export const pageConfig: PageConfig = {
   '/about': { headerText: HeaderText.About, bgClass: BackgroundClass.About },
   '/contact': {
      headerText: HeaderText.Contact,
      bgClass: BackgroundClass.Contact,
   },
   '/': { headerText: HeaderText.Home, bgClass: BackgroundClass.Home },
};
