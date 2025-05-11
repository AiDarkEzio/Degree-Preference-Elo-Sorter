import json
import pandas as pd
from ace_tools import display_dataframe_to_user

# Original JSON data
data = [
  {
    "degree_name": "Management studies TV",
    "degree_code": "022",
    "universities": [
      {
        "university_name": "University of Vavuniya",
        "university_code": "022R",
        "more_info_link": "/detail?id=022R"
      },
      {
        "university_name": "Trincomalee Campus - Eastern University",
        "university_code": "022W",
        "more_info_link": "/detail?id=022W"
      }
    ]
  },
  {
    "degree_name": "Design",
    "degree_code": "024",
    "universities": [
      {
        "university_name": "University of Moratuwa",
        "university_code": "024G",
        "more_info_link": "/detail?id=024G"
      }
    ]
  },
  {
    "degree_name": "BA Honours in Peace and Conflict Resolution",
    "degree_code": "031",
    "universities": [
      {
        "university_name": "University of Kelaniya",
        "university_code": "031D",
        "more_info_link": "/detail?id=031D"
      }
    ]
  },
  {
    "degree_name": "Fashion Design and Product Development",
    "degree_code": "034",
    "universities": [
      {
        "university_name": "University of Moratuwa",
        "university_code": "034G",
        "more_info_link": "/detail?id=034G"
      }
    ]
  },
  {
    "degree_name": "Information and Communication Technology",
    "degree_code": "038",
    "universities": [
      {
        "university_name": "Rajarata University of Sri Lanka",
        "university_code": "038K",
        "more_info_link": "/detail?id=038K"
      },
      {
        "university_name": "University of Vavuniya",
        "university_code": "038R",
        "more_info_link": "/detail?id=038R"
      }
    ]
  },
  {
    "degree_name": "Industrial Information Technology",
    "degree_code": "075",
    "universities": [
      {
        "university_name": "Uva Wellassa University of Sri Lanka",
        "university_code": "075U",
        "more_info_link": "/detail?id=075U"
      }
    ]
  },
  {
    "degree_name": "Management and Information Technology",
    "degree_code": "079",
    "universities": [
      {
        "university_name": "South Eastern University of Sri Lanka",
        "university_code": "079J",
        "more_info_link": "/detail?id=079J"
      }
    ]
  },
  {
    "degree_name": "Physical Education",
    "degree_code": "081",
    "universities": [
      {
        "university_name": "University of Jaffna",
        "university_code": "081E",
        "more_info_link": "/detail?id=081E"
      }
    ]
  },
  {
    "degree_name": "Sports Science and Management",
    "degree_code": "082",
    "universities": [
      {
        "university_name": "University of Sri Jayewardenepura",
        "university_code": "082C",
        "more_info_link": "/detail?id=082C"
      },
      {
        "university_name": "University of Kelaniya",
        "university_code": "082D",
        "more_info_link": "/detail?id=082D"
      },
      {
        "university_name": "sabaragamuwa University of Sri Lanka",
        "university_code": "082L",
        "more_info_link": "/detail?id=082L"
      }
    ]
  },
  {
    "degree_name": "Information Systems",
    "degree_code": "096",
    "universities": [
      {
        "university_name": "University of Sri Jayewardenepura",
        "university_code": "096C",
        "more_info_link": "/detail?id=096C"
      },
      {
        "university_name": "sabaragamuwa University of Sri Lanka",
        "university_code": "096L",
        "more_info_link": "/detail?id=096L"
      },
      {
        "university_name": "University of Colombo School of Computing",
        "university_code": "096T",
        "more_info_link": "/detail?id=096T"
      }
    ]
  },
  {
    "degree_name": "Film and Television Studies",
    "degree_code": "100",
    "universities": [
      {
        "university_name": "University of Kelaniya",
        "university_code": "100D",
        "more_info_link": "/detail?id=100D"
      }
    ]
  },
  {
    "degree_name": "Project Management",
    "degree_code": "101",
    "universities": [
      {
        "university_name": "University of Vavuniya",
        "university_code": "101R",
        "more_info_link": "/detail?id=101R"
      }
    ]
  },
  {
    "degree_name": "Engineering Technology",
    "degree_code": "102",
    "universities": [
      {
        "university_name": "University of Colombo",
        "university_code": "102A",
        "more_info_link": "/detail?id=102A"
      },
      {
        "university_name": "University of Sri Jayewardenepura",
        "university_code": "102C",
        "more_info_link": "/detail?id=102C"
      },
      {
        "university_name": "University of Kelaniya",
        "university_code": "102D",
        "more_info_link": "/detail?id=102D"
      },
      {
        "university_name": "University of Jaffna",
        "university_code": "102E",
        "more_info_link": "/detail?id=102E"
      },
      {
        "university_name": "University of Ruhuna",
        "university_code": "102F",
        "more_info_link": "/detail?id=102F"
      },
      {
        "university_name": "Rajarata University of Sri Lanka",
        "university_code": "102K",
        "more_info_link": "/detail?id=102K"
      },
      {
        "university_name": "sabaragamuwa University of Sri Lanka",
        "university_code": "102L",
        "more_info_link": "/detail?id=102L"
      },
      {
        "university_name": "Wayamba University of Sri Lanka",
        "university_code": "102M",
        "more_info_link": "/detail?id=102M"
      },
      {
        "university_name": "Uva Wellassa University of Sri Lanka",
        "university_code": "102U",
        "more_info_link": "/detail?id=102U"
      }
    ]
  },
  {
    "degree_name": "Information Communication Technology",
    "degree_code": "104",
    "universities": [
      {
        "university_name": "University of Colombo",
        "university_code": "104A",
        "more_info_link": "/detail?id=104A"
      },
      {
        "university_name": "University of Sri Jayewardenepura",
        "university_code": "104C",
        "more_info_link": "/detail?id=104C"
      },
      {
        "university_name": "University of Kelaniya",
        "university_code": "104D",
        "more_info_link": "/detail?id=104D"
      },
      {
        "university_name": "University of Ruhuna",
        "university_code": "104F",
        "more_info_link": "/detail?id=104F"
      },
      {
        "university_name": "Eastern University, Sri Lanka",
        "university_code": "104H",
        "more_info_link": "/detail?id=104H"
      },
      {
        "university_name": "South Eastern University of Sri Lanka",
        "university_code": "104J",
        "more_info_link": "/detail?id=104J"
      },
      {
        "university_name": "Rajarata University of Sri Lanka",
        "university_code": "104K",
        "more_info_link": "/detail?id=104K"
      },
      {
        "university_name": "University of Vavuniya",
        "university_code": "104R",
        "more_info_link": "/detail?id=104R"
      },
      {
        "university_name": "Uva Wellassa University of Sri Lanka",
        "university_code": "104U",
        "more_info_link": "/detail?id=104U"
      }
    ]
  },
  {
    "degree_name": "Human Resource Development",
    "degree_code": "114",
    "universities": [
      {
        "university_name": "Uva Wellassa University of Sri Lanka",
        "university_code": "114U",
        "more_info_link": "/detail?id=114U"
      }
    ]
  },
  {
    "degree_name": "Health Information and Communication Technology",
    "degree_code": "121",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "121P",
        "more_info_link": "/detail?id=121P"
      }
    ]
  },
  {
    "degree_name": "Health Tourism and Hospitality Management",
    "degree_code": "122",
        "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "122P",
        "more_info_link": "/detail?id=122P"
      }
    ]
  },
  {
    "degree_name": "Biomedical Technology",
    "degree_code": "123",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "123P",
        "more_info_link": "/detail?id=123P"
      }
    ]
  },
  {
    "degree_name": "Indigenous Pharmaceutical Technology",
    "degree_code": "124",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "124P",
        "more_info_link": "/detail?id=124P"
      }
    ]
  },
  {
    "degree_name": "Yoga and Parapsychology",
    "degree_code": "125",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "125P",
        "more_info_link": "/detail?id=125P"
      }
    ]
  },
  {
    "degree_name": "Social Studies in Indigenous Knowledge",
    "degree_code": "126",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "126P",
        "more_info_link": "/detail?id=126P"
      }
    ]
  },
  {
    "degree_name": "English Language and Applied Linguistics",
    "degree_code": "132",
    "universities": [
      {
        "university_name": "Uva Wellassa University of Sri Lanka",
        "university_code": "132U",
        "more_info_link": "/detail?id=132U"
      }
    ]
  },
  {
    "degree_name": "Creative Music Technology and Production",
    "degree_code": "134",
    "universities": [
      {
        "university_name": "University of Sri Jayewardenepura",
        "university_code": "134C",
        "more_info_link": "/detail?id=134C"
      }
    ]
  },
  {
    "degree_name": "Primary Education",
    "degree_code": "137",
    "universities": []
  },
  {
    "degree_name": "Service Management",
    "degree_code": "140",
    "universities": [
      {
        "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
        "university_code": "140P",
        "more_info_link": "/detail?id=140P"
      }
    ]
  }
]

# Flatten data
flattened = []
for degree in data:
    for uni in degree["universities"]:
        flattened.append({
            "degree_code": degree["degree_code"],
            "degree_name": degree["degree_name"],
            "university_name": uni["university_name"],
            "university_code": uni["university_code"],
            "more_info_link": uni["more_info_link"],
            "degree_university": f"{degree['degree_name']} - {uni['university_name']}",
            "rating": 1000
        })

# Display DataFrame to user
df = pd.DataFrame(flattened)
display_dataframe_to_user("Flattened Degrees for Elo", df)

# Print JSON for direct use
print("Here's the JSON data you can use for the Elo system:\n")
print(json.dumps(flattened, indent=2))
