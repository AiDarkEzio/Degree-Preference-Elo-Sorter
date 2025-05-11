document.addEventListener('DOMContentLoaded', () => {


  const initialJsonData = [
    {
      "degree_code": "022",
      "degree_name": "Management studies TV",
      "university_name": "University of Vavuniya",
      "university_code": "022R",
      "more_info_link": "/detail?id=022R",
      "degree_university": "Management studies TV - University of Vavuniya"
    },
    {
      "degree_code": "022",
      "degree_name": "Management studies TV",
      "university_name": "Trincomalee Campus - Eastern University",
      "university_code": "022W",
      "more_info_link": "/detail?id=022W",
      "degree_university": "Management studies TV - Trincomalee Campus - Eastern University"
    },
    {
      "degree_code": "024",
      "degree_name": "Design",
      "university_name": "University of Moratuwa",
      "university_code": "024G",
      "more_info_link": "/detail?id=024G",
      "degree_university": "Design - University of Moratuwa"
    },
    {
      "degree_code": "031",
      "degree_name": "BA Honours in Peace and Conflict Resolution",
      "university_name": "University of Kelaniya",
      "university_code": "031D",
      "more_info_link": "/detail?id=031D",
      "degree_university": "BA Honours in Peace and Conflict Resolution - University of Kelaniya"
    },
    {
      "degree_code": "034",
      "degree_name": "Fashion Design and Product Development",
      "university_name": "University of Moratuwa",
      "university_code": "034G",
      "more_info_link": "/detail?id=034G",
      "degree_university": "Fashion Design and Product Development - University of Moratuwa"
    },
    {
      "degree_code": "038",
      "degree_name": "Information and Communication Technology",
      "university_name": "Rajarata University of Sri Lanka",
      "university_code": "038K",
      "more_info_link": "/detail?id=038K",
      "degree_university": "Information and Communication Technology - Rajarata University of Sri Lanka"
    },
    {
      "degree_code": "038",
      "degree_name": "Information and Communication Technology",
      "university_name": "University of Vavuniya",
      "university_code": "038R",
      "more_info_link": "/detail?id=038R",
      "degree_university": "Information and Communication Technology - University of Vavuniya"
    },
    {
      "degree_code": "075",
      "degree_name": "Industrial Information Technology",
      "university_name": "Uva Wellassa University of Sri Lanka",
      "university_code": "075U",
      "more_info_link": "/detail?id=075U",
      "degree_university": "Industrial Information Technology - Uva Wellassa University of Sri Lanka"
    },
    {
      "degree_code": "079",
      "degree_name": "Management and Information Technology",
      "university_name": "South Eastern University of Sri Lanka",
      "university_code": "079J",
      "more_info_link": "/detail?id=079J",
      "degree_university": "Management and Information Technology - South Eastern University of Sri Lanka"
    },
    {
      "degree_code": "081",
      "degree_name": "Physical Education",
      "university_name": "University of Jaffna",
      "university_code": "081E",
      "more_info_link": "/detail?id=081E",
      "degree_university": "Physical Education - University of Jaffna"
    },
    {
      "degree_code": "082",
      "degree_name": "Sports Science and Management",
      "university_name": "University of Sri Jayewardenepura",
      "university_code": "082C",
      "more_info_link": "/detail?id=082C",
      "degree_university": "Sports Science and Management - University of Sri Jayewardenepura"
    },
    {
      "degree_code": "082",
      "degree_name": "Sports Science and Management",
      "university_name": "University of Kelaniya",
      "university_code": "082D",
      "more_info_link": "/detail?id=082D",
      "degree_university": "Sports Science and Management - University of Kelaniya"
    },
    {
      "degree_code": "082",
      "degree_name": "Sports Science and Management",
      "university_name": "sabaragamuwa University of Sri Lanka",
      "university_code": "082L",
      "more_info_link": "/detail?id=082L",
      "degree_university": "Sports Science and Management - sabaragamuwa University of Sri Lanka"
    },
    {
      "degree_code": "096",
      "degree_name": "Information Systems",
      "university_name": "University of Sri Jayewardenepura",
      "university_code": "096C",
      "more_info_link": "/detail?id=096C",
      "degree_university": "Information Systems - University of Sri Jayewardenepura"
    },
    {
      "degree_code": "096",
      "degree_name": "Information Systems",
      "university_name": "sabaragamuwa University of Sri Lanka",
      "university_code": "096L",
      "more_info_link": "/detail?id=096L",
      "degree_university": "Information Systems - sabaragamuwa University of Sri Lanka"
    },
    {
      "degree_code": "096",
      "degree_name": "Information Systems",
      "university_name": "University of Colombo School of Computing",
      "university_code": "096T",
      "more_info_link": "/detail?id=096T",
      "degree_university": "Information Systems - University of Colombo School of Computing"
    },
    {
      "degree_code": "100",
      "degree_name": "Film and Television Studies",
      "university_name": "University of Kelaniya",
      "university_code": "100D",
      "more_info_link": "/detail?id=100D",
      "degree_university": "Film and Television Studies - University of Kelaniya"
    },
    {
      "degree_code": "101",
      "degree_name": "Project Management",
      "university_name": "University of Vavuniya",
      "university_code": "101R",
      "more_info_link": "/detail?id=101R",
      "degree_university": "Project Management - University of Vavuniya"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "University of Colombo",
      "university_code": "102A",
      "more_info_link": "/detail?id=102A",
      "degree_university": "Engineering Technology - University of Colombo"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "University of Sri Jayewardenepura",
      "university_code": "102C",
      "more_info_link": "/detail?id=102C",
      "degree_university": "Engineering Technology - University of Sri Jayewardenepura"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "University of Kelaniya",
      "university_code": "102D",
      "more_info_link": "/detail?id=102D",
      "degree_university": "Engineering Technology - University of Kelaniya"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "University of Jaffna",
      "university_code": "102E",
      "more_info_link": "/detail?id=102E",
      "degree_university": "Engineering Technology - University of Jaffna"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "University of Ruhuna",
      "university_code": "102F",
      "more_info_link": "/detail?id=102F",
      "degree_university": "Engineering Technology - University of Ruhuna"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "Rajarata University of Sri Lanka",
      "university_code": "102K",
      "more_info_link": "/detail?id=102K",
      "degree_university": "Engineering Technology - Rajarata University of Sri Lanka"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "sabaragamuwa University of Sri Lanka",
      "university_code": "102L",
      "more_info_link": "/detail?id=102L",
      "degree_university": "Engineering Technology - sabaragamuwa University of Sri Lanka"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "Wayamba University of Sri Lanka",
      "university_code": "102M",
      "more_info_link": "/detail?id=102M",
      "degree_university": "Engineering Technology - Wayamba University of Sri Lanka"
    },
    {
      "degree_code": "102",
      "degree_name": "Engineering Technology",
      "university_name": "Uva Wellassa University of Sri Lanka",
      "university_code": "102U",
      "more_info_link": "/detail?id=102U",
      "degree_university": "Engineering Technology - Uva Wellassa University of Sri Lanka"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "University of Colombo",
      "university_code": "104A",
      "more_info_link": "/detail?id=104A",
      "degree_university": "Information Communication Technology - University of Colombo"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "University of Sri Jayewardenepura",
      "university_code": "104C",
      "more_info_link": "/detail?id=104C",
      "degree_university": "Information Communication Technology - University of Sri Jayewardenepura"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "University of Kelaniya",
      "university_code": "104D",
      "more_info_link": "/detail?id=104D",
      "degree_university": "Information Communication Technology - University of Kelaniya"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "University of Ruhuna",
      "university_code": "104F",
      "more_info_link": "/detail?id=104F",
      "degree_university": "Information Communication Technology - University of Ruhuna"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "Eastern University, Sri Lanka",
      "university_code": "104H",
      "more_info_link": "/detail?id=104H",
      "degree_university": "Information Communication Technology - Eastern University, Sri Lanka"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "South Eastern University of Sri Lanka",
      "university_code": "104J",
      "more_info_link": "/detail?id=104J",
      "degree_university": "Information Communication Technology - South Eastern University of Sri Lanka"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "Rajarata University of Sri Lanka",
      "university_code": "104K",
      "more_info_link": "/detail?id=104K",
      "degree_university": "Information Communication Technology - Rajarata University of Sri Lanka"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "University of Vavuniya",
      "university_code": "104R",
      "more_info_link": "/detail?id=104R",
      "degree_university": "Information Communication Technology - University of Vavuniya"
    },
    {
      "degree_code": "104",
      "degree_name": "Information Communication Technology",
      "university_name": "Uva Wellassa University of Sri Lanka",
      "university_code": "104U",
      "more_info_link": "/detail?id=104U",
      "degree_university": "Information Communication Technology - Uva Wellassa University of Sri Lanka"
    },
    {
      "degree_code": "114",
      "degree_name": "Human Resource Development",
      "university_name": "Uva Wellassa University of Sri Lanka",
      "university_code": "114U",
      "more_info_link": "/detail?id=114U",
      "degree_university": "Human Resource Development - Uva Wellassa University of Sri Lanka"
    },
    {
      "degree_code": "121",
      "degree_name": "Health Information and Communication Technology",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "121P",
      "more_info_link": "/detail?id=121P",
      "degree_university": "Health Information and Communication Technology - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "122",
      "degree_name": "Health Tourism and Hospitality Management",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "122P",
      "more_info_link": "/detail?id=122P",
      "degree_university": "Health Tourism and Hospitality Management - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "123",
      "degree_name": "Biomedical Technology",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "123P",
      "more_info_link": "/detail?id=123P",
      "degree_university": "Biomedical Technology - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "124",
      "degree_name": "Indigenous Pharmaceutical Technology",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "124P",
      "more_info_link": "/detail?id=124P",
      "degree_university": "Indigenous Pharmaceutical Technology - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "125",
      "degree_name": "Yoga and Parapsychology",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "125P",
      "more_info_link": "/detail?id=125P",
      "degree_university": "Yoga and Parapsychology - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "126",
      "degree_name": "Social Studies in Indigenous Knowledge",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "126P",
      "more_info_link": "/detail?id=126P",
      "degree_university": "Social Studies in Indigenous Knowledge - Gampaha Wickramarachchi University of Indigenous Medicine"
    },
    {
      "degree_code": "132",
      "degree_name": "English Language and Applied Linguistics",
      "university_name": "Uva Wellassa University of Sri Lanka",
      "university_code": "132U",
      "more_info_link": "/detail?id=132U",
      "degree_university": "English Language and Applied Linguistics - Uva Wellassa University of Sri Lanka"
    },
    {
      "degree_code": "134",
      "degree_name": "Creative Music Technology and Production",
      "university_name": "University of Sri Jayewardenepura",
      "university_code": "134C",
      "more_info_link": "/detail?id=134C",
      "degree_university": "Creative Music Technology and Production - University of Sri Jayewardenepura"
    },
    {
      "degree_code": "140",
      "degree_name": "Service Management",
      "university_name": "Gampaha Wickramarachchi University of Indigenous Medicine",
      "university_code": "140P",
      "more_info_link": "/detail?id=140P",
      "degree_university": "Service Management - Gampaha Wickramarachchi University of Indigenous Medicine"
    }
  ]; // Removed rating from initial JSON, will be added in processing

  let allDegreesMasterData = []; // Holds all programs with their ratings and selection state
  let degreesData = []; // Holds currently selected programs for comparison
  const K_FACTOR = 32;
  let currentOptionA = null;
  let currentOptionB = null;
  let comparisonsMade = 0;
  let includeUnselectedInDownload = false;

  // DOM Elements
  const statsContent = document.getElementById('stats-content');
  const optionAName = document.getElementById('optionAName');
  const optionARating = document.getElementById('optionARating');
  const optionBName = document.getElementById('optionBName');
  const optionBRating = document.getElementById('optionBRating');
  const selectAButton = document.getElementById('selectAButton');
  const selectBButton = document.getElementById('selectBButton');
  const sortedDegreesList = document.getElementById('sorted-degrees-list');
  const downloadJsonButton = document.getElementById('downloadJsonButton');
  const resetRatingsButton = document.getElementById('resetRatingsButton');
  const comparisonCountDisplay = document.getElementById('comparison-count');

  // Settings Modal Elements
  const settingsButton = document.getElementById('settingsButton');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsModalButton = document.getElementById('closeSettingsModal');
  const programCheckboxList = document.getElementById('program-checkbox-list');
  const includeUnselectedToggle = document.getElementById('includeUnselectedToggle');
  const applySettingsButton = document.getElementById('applySettingsButton');
  const selectAllProgramsButton = document.getElementById('selectAllProgramsButton');
  const deselectAllProgramsButton = document.getElementById('deselectAllProgramsButton');

  function initializeData() {
      const storedMasterData = localStorage.getItem('allDegreesMasterData');
      const storedComparisons = localStorage.getItem('comparisonsMade');
      const storedIncludeUnselected = localStorage.getItem('includeUnselectedInDownload');

      if (storedMasterData) {
          allDegreesMasterData = JSON.parse(storedMasterData);
          // Ensure all initial programs are present, add new ones if any
          const masterDataIds = new Set(allDegreesMasterData.map(d => d.id));
          initialJsonData.forEach(initialDegree => {
              const id = initialDegree.university_code;
              if (!masterDataIds.has(id)) {
                  allDegreesMasterData.push({
                      ...initialDegree,
                      id: id,
                      rating: 1000,
                      isSelected: true // New programs default to selected
                  });
              }
          });
          // Optional: remove programs from master data if not in initialJsonData anymore
          const initialDataIds = new Set(initialJsonData.map(d => d.university_code));
          allDegreesMasterData = allDegreesMasterData.filter(d => initialDataIds.has(d.id));

      } else {
          allDegreesMasterData = initialJsonData.map(degree => ({
              ...degree,
              id: degree.university_code, // Use university_code as a unique ID
              rating: 1000, // Initial Elo rating
              isSelected: true // Default to selected
          }));
      }
      
      degreesData = allDegreesMasterData.filter(degree => degree.isSelected);
      comparisonsMade = storedComparisons ? parseInt(storedComparisons) : 0;
      includeUnselectedInDownload = storedIncludeUnselected ? JSON.parse(storedIncludeUnselected) : false;
      includeUnselectedToggle.checked = includeUnselectedInDownload;

      saveDataToLocalStorage(); // Save potentially merged data
  }

  function saveDataToLocalStorage() {
      localStorage.setItem('allDegreesMasterData', JSON.stringify(allDegreesMasterData));
      localStorage.setItem('comparisonsMade', comparisonsMade.toString());
      localStorage.setItem('includeUnselectedInDownload', JSON.stringify(includeUnselectedInDownload));
  }

  function calculateStatistics() {
      const totalProgramsInSystem = allDegreesMasterData.length;
      const selectedProgramsCount = degreesData.length;

      const uniqueDegrees = new Set(allDegreesMasterData.map(d => d.degree_name)).size;
      const uniqueUniversities = new Set(allDegreesMasterData.map(d => d.university_name)).size;

      const universityCounts = allDegreesMasterData.reduce((acc, curr) => {
          acc[curr.university_name] = (acc[curr.university_name] || 0) + 1;
          return acc;
      }, {});

      const topUniversities = Object.entries(universityCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 3)
          .map(([name, count]) => `${name} (${count} programs)`)
          .join(', ');

      statsContent.innerHTML = `
          <p>Total Programs in System: ${totalProgramsInSystem}</p>
          <p>Unique Degree Names (Overall): ${uniqueDegrees}</p>
          <p>Unique Universities (Overall): ${uniqueUniversities}</p>
          <p>Top 3 Universities by Program Count (Overall): ${topUniversities || 'N/A'}</p>
          <p>Programs Currently Selected for Ranking: ${selectedProgramsCount}</p>
      `;
  }
  
  function getRatingColor(rating, minRating, maxRating) {
      if (minRating === maxRating) { // All items have same rating or only one item
          return `hsl(${getComputedStyle(document.documentElement).getPropertyValue('--green-hue')}, 60%, 30%)`; // Default neutral-positive color
      }
      const normalized = (rating - minRating) / (maxRating - minRating);
      const hue = (1 - normalized) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--red-hue')) + 
                  normalized * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--green-hue'));
      return `hsl(${hue}, 70%, 35%)`; // Adjust saturation and lightness as needed
  }

  function renderSortedList() {
      degreesData.sort((a, b) => b.rating - a.rating);
      sortedDegreesList.innerHTML = ''; 

      const ratings = degreesData.map(d => d.rating);
      const minRating = Math.min(...ratings);
      const maxRating = Math.max(...ratings);

      degreesData.forEach(degree => {
          const listItem = document.createElement('li');
          listItem.style.backgroundColor = getRatingColor(degree.rating, minRating, maxRating);
          
          listItem.innerHTML = `
              <div class="degree-details" data-university-code="${degree.university_code}" title="Click to view details for ${degree.degree_university}">
                  <span class="degree-name">${degree.degree_university}</span>
                  <span class="degree-rating">${Math.round(degree.rating)}</span>
              </div>
              <button class="copy-button" title="Copy Degree Code: ${degree.university_code}" data-degree-code="${degree.university_code}">📋</button>
          `;
          
          listItem.querySelector('.degree-details').addEventListener('click', () => {
              window.open(`https://thush.lk/detail/index.php?id=${degree.university_code}`, '_blank');
          });

          const copyButton = listItem.querySelector('.copy-button');
          copyButton.addEventListener('click', (e) => {
              e.stopPropagation(); // Prevent li click event
              navigator.clipboard.writeText(degree.university_code).then(() => {
                  copyButton.textContent = 'Copied!';
                  copyButton.classList.add('copied');
                  setTimeout(() => {
                      copyButton.textContent = '📋';
                      copyButton.classList.remove('copied');
                  }, 1500);
              }).catch(err => {
                  console.error('Failed to copy: ', err);
                  copyButton.textContent = 'Error';
                   setTimeout(() => {
                      copyButton.textContent = '📋';
                  }, 1500);
              });
          });
          sortedDegreesList.appendChild(listItem);
      });
  }

  function getRandomDegreeFromActiveSet() {
      if (degreesData.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * degreesData.length);
      return degreesData[randomIndex];
  }

  function presentNewComparison() {
      if (degreesData.length < 2) {
          optionAName.textContent = "Not enough selected programs for comparison.";
          optionARating.textContent = "-";
          optionBName.textContent = "Select at least 2 programs in Settings.";
          optionBRating.textContent = "-";
          selectAButton.disabled = true;
          selectBButton.disabled = true;
          currentOptionA = null;
          currentOptionB = null;
          return;
      }

      let option1 = getRandomDegreeFromActiveSet();
      let option2 = getRandomDegreeFromActiveSet();

      while (option1.id === option2.id) {
          option2 = getRandomDegreeFromActiveSet();
      }

      currentOptionA = option1;
      currentOptionB = option2;

      optionAName.textContent = currentOptionA.degree_university;
      optionARating.textContent = Math.round(currentOptionA.rating);
      optionBName.textContent = currentOptionB.degree_university;
      optionBRating.textContent = Math.round(currentOptionB.rating);

      selectAButton.disabled = false;
      selectBButton.disabled = false;
  }

  function updateEloRating(winner, loser) {
      const expectedScoreWinner = 1 / (1 + Math.pow(10, (loser.rating - winner.rating) / 400));
      const expectedScoreLoser = 1 / (1 + Math.pow(10, (winner.rating - loser.rating) / 400));

      // Find the actual objects in allDegreesMasterData to update their ratings
      const winnerInMaster = allDegreesMasterData.find(d => d.id === winner.id);
      const loserInMaster = allDegreesMasterData.find(d => d.id === loser.id);

      if (winnerInMaster) winnerInMaster.rating += K_FACTOR * (1 - expectedScoreWinner);
      if (loserInMaster) loserInMaster.rating += K_FACTOR * (0 - expectedScoreLoser);
  }

  function handleSelection(winner, loser) {
      updateEloRating(winner, loser);
      comparisonsMade++;
      comparisonCountDisplay.textContent = `Comparisons made: ${comparisonsMade}`;
      saveDataToLocalStorage();
      renderSortedList(); // Uses degreesData (active set)
      presentNewComparison(); // Uses degreesData (active set)
  }

  selectAButton.addEventListener('click', () => {
      if (currentOptionA && currentOptionB) {
          handleSelection(currentOptionA, currentOptionB);
      }
  });

  selectBButton.addEventListener('click', () => {
      if (currentOptionA && currentOptionB) {
          handleSelection(currentOptionB, currentOptionA);
      }
  });

  downloadJsonButton.addEventListener('click', () => {
      let dataToDownload;
      if (includeUnselectedInDownload) {
          const selectedItems = allDegreesMasterData
              .filter(d => d.isSelected)
              .sort((a, b) => b.rating - a.rating);
          const unselectedItems = allDegreesMasterData
              .filter(d => !d.isSelected)
              .sort((a, b) => b.rating - a.rating); // Also sort unselected by their rating
          dataToDownload = [...selectedItems, ...unselectedItems];
      } else {
          dataToDownload = degreesData.sort((a, b) => b.rating - a.rating); // degreesData is already filtered and sorted for display
      }
      
      const dataStr = JSON.stringify(dataToDownload.map(d => ({ // strip isSelected for download if not needed
          degree_code: d.degree_code,
          degree_name: d.degree_name,
          university_name: d.university_name,
          university_code: d.university_code,
          more_info_link: d.more_info_link,
          degree_university: d.degree_university,
          rating: Math.round(d.rating) // Round rating for download
      })), null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
      const exportFileDefaultName = 'sorted_degree_programs.json';
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
  });

  resetRatingsButton.addEventListener('click', () => {
      if (confirm("Are you sure you want to reset all ratings, selections, and comparison counts? This cannot be undone.")) {
          allDegreesMasterData.forEach(degree => {
              degree.rating = 1000;
              degree.isSelected = true; // Reset to all selected
          });
          degreesData = allDegreesMasterData.filter(degree => degree.isSelected); // Update active set
          comparisonsMade = 0;
          includeUnselectedInDownload = false; // Reset toggle
          includeUnselectedToggle.checked = false;
          
          comparisonCountDisplay.textContent = `Comparisons made: ${comparisonsMade}`;
          saveDataToLocalStorage();
          populateSettingsModal(); // Repopulate with all checked
          calculateStatistics();
          renderSortedList();
          presentNewComparison();
      }
  });

  // Settings Modal Logic
  function populateSettingsModal() {
      programCheckboxList.innerHTML = ''; // Clear previous checkboxes
      allDegreesMasterData
          .sort((a,b) => a.degree_university.localeCompare(b.degree_university)) // Sort alphabetically for the list
          .forEach(degree => {
          const label = document.createElement('label');
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = degree.id;
          checkbox.checked = degree.isSelected;
          checkbox.dataset.degreeId = degree.id; 
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(` ${degree.degree_university} (Code: ${degree.university_code})`));
          programCheckboxList.appendChild(label);
      });
  }

  settingsButton.addEventListener('click', () => {
      populateSettingsModal();
      settingsModal.style.display = 'block';
  });

  closeSettingsModalButton.addEventListener('click', () => {
      settingsModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => { // Close modal if clicked outside
      if (event.target === settingsModal) {
          settingsModal.style.display = 'none';
      }
  });

  applySettingsButton.addEventListener('click', () => {
      const checkboxes = programCheckboxList.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
          const degree = allDegreesMasterData.find(d => d.id === checkbox.dataset.degreeId);
          if (degree) {
              degree.isSelected = checkbox.checked;
          }
      });
      degreesData = allDegreesMasterData.filter(degree => degree.isSelected);
      includeUnselectedInDownload = includeUnselectedToggle.checked;
      
      saveDataToLocalStorage();
      calculateStatistics();
      renderSortedList();
      presentNewComparison();
      settingsModal.style.display = 'none';
  });

  selectAllProgramsButton.addEventListener('click', () => {
      programCheckboxList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
  });
  deselectAllProgramsButton.addEventListener('click', () => {
      programCheckboxList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  });
  
  includeUnselectedToggle.addEventListener('change', () => {
      includeUnselectedInDownload = includeUnselectedToggle.checked;
      saveDataToLocalStorage(); // Save this preference immediately
  });

  // Initial setup
  initializeData();
  calculateStatistics();
  renderSortedList();
  presentNewComparison();
  comparisonCountDisplay.textContent = `Comparisons made: ${comparisonsMade}`;
});