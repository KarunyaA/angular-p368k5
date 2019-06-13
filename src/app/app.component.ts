import { Component, OnInit } from '@angular/core';

interface Areas {
  area: Area[];
}
interface Area {
  type: string;
  sections: Sections[];
  
}
interface Sections {
  type: string;
  value: string;
  rjf: RjfData[]
}
interface RjfData {
  type: string;
  text: string;
  depth?: number;
  style?: InlineStyle[],
  entity?: InlineEntity[]
}
interface InlineStyle {
  type: string;
  style: string;
  offset: Number;
  length: Number;
  text: string;
} 
interface InlineEntity {
  type: string;
  offset: Number;
  length: Number;
  data: {
    url: string;
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';

ngOnInit(){
  this.renderDynamicComponent();
}
 public renderDynamicComponent(){

let sample1 =
{
  area: [{
    type: 'default',
    sections: [{
      type: 'abc',
      value: 'abc',
      rjf: [{
        type: 'heading-1',
        text: 'Hello-world'
      }]
    }]
}]  
};
let areaDataList = {
  area: [
    {
      type: 'default',
      sections: [{
        "type": "title",
        "value": "Travel to the United States",
        "rjf": [
          {
            "type": "heading-1",
            "text": "Travel to the United States"
          }
        ]
      },
        {
          "type": "description",
        "value": "When you fly to, from or via the United States, special rules apply. If you are not required to have a visa, you will need an ESTA travel authorisation.",
        "rjf": [
          {
            "type": "text",
            "text": "When you fly to, from or via the United States, special rules apply. If you are not required to have a visa, you will need an ESTA travel authorisation."
          }
          ]
        }
      ]
    },
    {
      type: 'default',
      sections: [
        {
          "type": "text",
          "value": "TSA Pre Check\nKLM is participating in the TSA Pre✓® (TSA Pre Check) programme of the US Transportation Security Administration. This is accessible for passengers departing from or travelling within the United States. If you want to benefit from TSA Pre Check on your connecting flight within the United States, you must always re-print your boarding pass upon arrival at the first US airport.\nOnce you have applied and have been approved to be a member of the TSA Pre Check programme, the TSA Pre Check logo or text “TSA PRE” will appear on your boarding pass. You will still have to undergo a quick security check at a dedicated TSA line, currently available at 200 US airports. However, you don’t need to remove your shoes, electronic devices, liquids, belts and light jackets.\nRegistrate and read more about TSA Pre Check ✓®\nCurrently, it is not yet possible to enter your TSA Known Traveler Number online. Please contact the KLM Customer Contact Centre to add the number to your booking",
          "rjf": [
            {
              "type": "heading-1",
              "text": "TSA Pre Check"
            },
            {
              "type": "text",
              "text": "KLM is participating in the TSA Pre✓® (TSA Pre Check) programme of the US Transportation Security Administration. This is accessible for passengers departing from or travelling within the United States. If you want to benefit from TSA Pre Check on your connecting flight within the United States, you must always re-print your boarding pass upon arrival at the first US airport.\n"
            },
            {
              "type": "text",
              "text": "Once you have applied and have been approved to be a member of the TSA Pre Check programme, the TSA Pre Check logo or text “TSA PRE” will appear on your boarding pass. You will still have to undergo a quick security check at a dedicated TSA line, currently available at 200 US airports. However, you don’t need to remove your shoes, electronic devices, liquids, belts and light jackets.\n"
            },
            {
              "type": "text",
              "text": "Registrate and read more about TSA Pre Check ✓®",
              "inlineEntityRanges": [
                {
                  "type": "LINK",
                  "offset": 0,
                  "data": {
                    "url": "https://www.tsa.gov/precheck"
                  },
                  "length": 47
                }
              ]
            }
          ]
        }]
    },
    {
      type: 'default',
      sections: [
        {
        "type": "text",
        "value": "Advance Passenger Information\nIf you travel to the United States, we are required to collect various personal data. We recommend providing this Advance Passenger Information (API) as early as possible:\n\n· To your travel agent\n· Via My Trip\n· During online check-in, from 24 hours up to 1 hour before departure.\n· At a kiosk at the airport. If you depart from an airport where you can only check in at the desk, our staff will register the data on your passport.\n\nThe API data includes:\n\n· Family name and first name\n· Date of birth and gender\n· Passport number\n· Country that issued the passport\n· Passport expiry date\n· Nationality\n· Country of residence\n· Temporary address where you will be staying during your visit. This address must include the house number, street, city or town, abbreviation used for the state, and the postal code.",
        "rjf": [
          {
            "type": "heading-1",
            "text": "Advance Passenger Information"
          },
          {
            "type": "text",
            "text": "If you travel to the United States, we are required to collect various personal data. We recommend providing this Advance Passenger Information (API) as early as possible:"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "To your travel agent"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Via My Trip",
            "inlineEntityRanges": [
              {
                "type": "LINK",
                "offset": 4,
                "data": {
                  "url": "https://www.klm.com/home/nl/en#/tab=hpTbMyKlm"
                },
                "length": 7
              }
            ]
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "During online check-in, from 24 hours up to 1 hour before departure."
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "At a kiosk at the airport. If you depart from an airport where you can only check in at the desk, our staff will register the data on your passport."
          },
          {
            "type": "text",
            "text": "\nThe API data includes:"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Family name and first name"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Date of birth and gender"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Passport number"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Country that issued the passport"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Passport expiry date"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Nationality"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Country of residence"
          },
          {
            "type": "unordered-list-item",
            "depth": 1,
            "text": "Temporary address where you will be staying during your visit. This address must include the house number, street, city or town, abbreviation used for the state, and the postal code."
          }
        ]
      }]
    }
  ]
}
let accordionArea = {
  area: [
    {
      "type": "default",
      "sections": [
        {
          "type": "title",
          "value": "Legal information",
          "rjf": [
            {
              "type": "heading-1",
              "text": "Legal information"
            }
          ]
        },
        {
          "type": "description",
          "value": "On this page you will find KLM’s legal information",
          "rjf": [
            {
              "type": "text",
              "text": "On this page you will find KLM’s legal information, special rules apply. If you are not required to have a visa, you will need an ESTA travel authorisation."
            }
          ]
        }
      ]
    },
    {
      "type": "accordion-item",
      "sections": [
        {
          "type": "accordion-title",
          "value": "© 2019 KLM",
          "rjf": [
            {
              "type": "heading-1",
              "text": "© 2019 KLM"
            }
          ]
        },
        {
          "type": "accordion-body",
          "value": "This website is offered to you by: \nKoninklijke Luchtvaart Maatschappij N.V.\n\n(also known as KLM Royal Dutch Airlines) \n\nAmsterdamseweg 55 \n1182 GP Amstelveen \nThe Netherlands\n\nRegistered No 33014286 \nVAT Number NL004983269B01\n\n\nDo you have questions or comments and do you wish to contact KLM? Please visit our customer support page.",
          "rjf": [
            {
              "type": "text",
              "text": "This website is offered to you by:\nKoninklijke Luchtvaart Maatschappij N.V.",
              "inlineStyleRanges": [
                {
                  "style": "BOLD",
                  "offset": 35,
                  "length": 40
                }
              ],
              "inlineEntityRanges": []
            },
            {
              "type": "text",
              "text": "(also known as KLM Royal Dutch Airlines)\n"
            },
            {
              "type": "text",
              "text": "Amsterdamseweg 55\n\n1182 GP Amstelveen\n\nThe Netherlands"
            },
            {
              "type": "text",
              "text": "Registered No 33014286\n\nVAT Number NL004983269B01"
            },
            {
              "type": "text",
              "text": "\nDo you have questions or comments and do you wish to contact KLM? Please visit our customer support page.",
              "inlineEntityRanges": [
                {
                  "type": "LINK",
                  "offset": 84,
                  "data": {
                    "url": "/travel/nl_en/customer_support/customer_support/all_about_customer_support/index.htm"
                  },
                  "length": 16
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "accordion-item",
      "sections": [
        {
          "type": "accordion-title",
          "value": "Website terms of use",
          "rjf": [
            {
              "type": "heading-1",
              "text": "Website terms of use"
            }
          ]
        },
        {
          "type": "accordion-body",
          "value": "Please review our terms of use of the KLM website carefully before using this website. Your use of this website indicates you agree to be bound by these terms. View our website terms of use.",
          "rjf": [
            {
              "type": "text",
              "text": " Please review our terms of use of the KLM website carefully before using this website. Your use of this website indicates you agree to be bound by these terms. View our website terms of use.\n",
              "inlineEntityRanges": [
                {
                  "type": "LINK",
                  "offset": 19,
                  "data": {
                    "url": "/travel/nl_en/customer_support/legal_notice/index.htm"
                  },
                  "length": 12
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

let accordionData: Areas;
accordionData = accordionArea;
console.log('Accordion data transformed', areaResolver(accordionData));
let typeChkArea : Areas;
typeChkArea = areaDataList;
console.log('normal data with list', areaResolver(typeChkArea));
function areaResolver(areaData: Areas) {
  if (isAccordion(areaData)) {
    return [{
      uiType: 'layout',
      type: 'area',
      subtype: 'accordion',
      items: getData(areaData)
     }]
  } else {
    return areaData.area.map(function (aData) {
      return aData.sections.map(function (sData) {
        if (isList(sData)) {
          return {
            uiType: 'layout',
            type: 'section',
            subtype: 'list',
            listItems: sData.rjf.filter(function (secObj) {
                        return (secObj.type === 'unordered-list-item' ||
                          secObj.type === 'ordered-list-item');
            }),
            items: sData.rjf.filter(function (secObj) {
                        return (secObj.type !== 'unordered-list-item' &&
                          secObj.type !== 'ordered-list-item');
            })
          }
        } else {
          return {
            uiType: 'default',
            type: 'section',
            subtype: '',
            items: sData.rjf
           }
         }
       })
     })
   }
}
function isList(sObj: Sections) {
  return (sObj.rjf.filter(function (secObj) {
    return (secObj.type === 'unordered-list-item' ||
      secObj.type === 'ordered-list-item');
  }).length > 0 ? true : false);
}
function isAccordion(aObj: Areas) {
  const accorObj = aObj.area.filter(function (f) {
    return f.type === 'accordion-item';
  });
  if (accorObj.length > 1) {
    return true;
  } else {
    return false;
  }
}
function getData(areaParent: any) {
  return areaParent.area.map(function (f) {
    return f.sections.map(function (sObj) {
      if (sObj.type.indexOf('accordion') >= 0) {
        return {
          sectionType: sObj.type,
          data: sObj.rjf
        }
      } else {
        return {
          sectionType: 'default',
          data: sObj.rjf
        }
      }
    });
  });
}
 }
}