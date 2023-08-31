import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const ColorPalette: React.FC = () => {
  return (
    <>
      <h2 className="p-5 font-maison-neue-book text-xl">Primary</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-white p-4 text-center">Delight</div>
        <div className="bg-krestrel-black p-4 text-center">Empower</div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Secondary</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-yellow p-4 text-center">
          Always Optimistic
        </div>
        <div className="bg-krestrel-green p-4 text-center">
          Feeling confident
        </div>
        <div className="bg-krestrel-magenta p-4 text-center">Be inspired</div>
        <div className="bg-krestrel-purple p-4 text-center">Stay dynamic</div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Accent</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-perwinkle p-4 text-center">
          Always splendid
        </div>
        <div className="bg-krestrel-romantic p-4 text-center">Feeling joy</div>
        <div className="bg-krestrel-tan p-4 text-center">Be grateful</div>
        <div className="bg-krestrel-lime p-4 text-center">Stay ambitious </div>
      </div>
      {/* <h2 className="p-5 font-maison-neue-book text-xl">Tertiary</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-white p-4 text-center">Empower 75</div>
        <div className="bg-krestrel-black p-4 text-center">Empower 50</div>
        <div className="bg-krestrel-white p-4 text-center">Empower 25</div>
        <div className="bg-krestrel-black p-4 text-center">Empower 5 </div>
        <div className="bg-krestrel-white p-4 text-center">
          Always splendid 5
        </div>
        <div className="bg-krestrel-black p-4 text-center">
          Stay ambitious 10
        </div>
        <div className="bg-krestrel-white p-4 text-center">Feeling joy 10</div>
        <div className="bg-krestrel-black p-4 text-center">Be grateful 10 </div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Surface</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-surfacePrimary p-4 text-center">
          Priamry
        </div>
        <div className="bg-krestrel-surfaceSecondary p-4 text-center">
          Secondary
        </div>
        <div className="bg-krestrel-surfaceFloating p-4 text-center">
          Floating
        </div>
        <div className="bg-krestrel-surfaceWhite p-4 text-center">White</div>
      </div> */}
      <h2 className="p-5 font-maison-neue-book text-xl">Actionable</h2>
      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-action-primary p-4 text-center">
          Primary Key
        </div>
        <div className="bg-krestrel-action-pressed p-4 text-center">
          Hover, Text, Pressed
        </div>
        <div className="bg-krestrel-action-disabled p-4 text-center">
          Disabled
        </div>
        <div className="bg-krestrel-action-green p-4 text-center">
          Accent Key 1
        </div>
        <div className="bg-krestrel-action-hover p-4 text-center">
          Accent Key 1 Hover
        </div>
        <div className="bg-krestrel-action-peach p-4 text-center">
          Accent Key 2
        </div>
        <div className="bg-krestrel-action-peachHover p-4 text-center">
          Accent Key 2 Hover
        </div>
        <div className="bg-krestrel-action-rogue p-4 text-center">
          Accent Key 3
        </div>
        <div className="bg-krestrel-action-rogueHover p-4 text-center">
          Accent Key 3 Hover
        </div>
        <div className="bg-krestrel-action-outline p-4 text-center">
          Outline
        </div>
        <div className="bg-krestrel-action-focus p-4 text-center">Focus</div>
        <div className="bg-krestrel-action-hyperlinkLight p-4 text-center">
          Hyperlink on light
        </div>
        <div className="bg-krestrel-action-hyperlinkDark p-4 text-center">
          Hyperlink on dark
        </div>
        <div className="bg-krestrel-action-hyperlinkVisited p-4 text-center">
          Hyperlink on light
        </div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Success</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-success-text p-4 text-center">Text</div>
        <div className="bg-krestrel-success-primary p-4 text-center">
          Primary
        </div>
        <div className="bg-krestrel-success-sub p-4 text-center">Subdued</div>
        <div className="bg-krestrel-success-light p-4 text-center">
          Field light
        </div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Error</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-error-text p-4 text-center">Text</div>
        <div className="bg-krestrel-error-primary p-4 text-center">Primary</div>
        <div className="bg-krestrel-error-sub p-4 text-center">Subdued</div>
        <div className="bg-krestrel-error-light p-4 text-center">
          Field light
        </div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Status Alert</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-alert-text p-4 text-center">Text</div>
        <div className="bg-krestrel-alert-primary p-4 text-center">Primary</div>
        <div className="bg-krestrel-alert-sub p-4 text-center">Subdued</div>
        <div className="bg-krestrel-alert-light p-4 text-center">
          Field light
        </div>
      </div>
      <h2 className="p-5 font-maison-neue-book text-xl">Status Info</h2>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-krestrel-info-text p-4 text-center">Text</div>
        <div className="bg-krestrel-info-primary p-4 text-center">Primary</div>
        <div className="bg-krestrel-info-sub p-4 text-center">Subdued</div>
        <div className="bg-krestrel-info-light p-4 text-center">
          Field light
        </div>
      </div>
      {/**
       *
       *
       *
       *
       */}
      <h1>Legacy</h1>

      <div className="grid grid-cols-4 font-maison-neue-book gap-4">
        <div className="bg-gray-50 p-4 text-center">Gray 50</div>
        <div className="bg-gray-100 p-4 text-center">Gray 100</div>
        <div className="bg-gray-200 p-4 text-center">Gray 200</div>
        <div className="bg-gray-250 p-4 text-center">Gray 250</div>
        <div className="bg-gray-300 p-4 text-center">Gray 300</div>
        <div className="bg-gray-350 p-4 text-center">Gray 350</div>
        <div className="bg-gray-400 p-4 text-center">Gray 400</div>
        <div className="bg-gray-500 p-4 text-center">Gray 500</div>
        <div className="bg-gray-600 p-4 text-center">Gray 600</div>
        <div className="bg-gray-700 p-4 text-center">Gray 700</div>
        <div className="bg-gray-800 p-4 text-center">Gray 800</div>
        <div className="bg-gray-900 p-4 text-center">Gray 900</div>
        <div className="bg-gray-950 p-4 text-center">Gray 950</div>
        <div className="bg-gray-900-40 p-4 text-center">
          Gray 900 / Opacity 40
        </div>
        {/* <div className="bg-lightgray-800 p-4 text-center">Light Gray 800</div>
        <div className="bg-indigo p-4 text-center">Indigo</div>
        <div className="bg-success p-4 text-center">Success</div>
        <div className="bg-warning p-4 text-center">Warning</div>
        <div className="bg-info p-4 text-center">Info</div>
        <div className="bg-error p-4 text-center">Error</div>
        <div className="bg-tag-success text-tag-success-text p-4 text-center">
          Tag Success
        </div>
        <div className="bg-tag-warning text-tag-warning-text p-4 text-center">
          Tag Warning
        </div>
        <div className="bg-dashboard-border p-4 text-center">Border</div>
        <div className="bg-walkthrough-background text-walkthrough-color p-4 text-center">
          Welcome Exp
        </div>
        <div className="bg-light-blue p-4 text-center">Light blue</div>
        <div className="bg-light-green p-4 text-center">Light green</div>
        <div className="bg-bp-primary p-4 text-center">Brand Portal</div> */}
      </div>
    </>
  );
};

export default {
  title: 'Utils/Colors',
  component: ColorPalette,
} as ComponentMeta<typeof ColorPalette>;

const Template: ComponentStory<typeof ColorPalette> = (args) => (
  <ColorPalette {...args} />
);
export const Colors = Template.bind({});
