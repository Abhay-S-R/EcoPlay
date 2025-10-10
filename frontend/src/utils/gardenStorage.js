const GARDEN_KEY = 'ecoplay_garden_data';
const SESSION_KEY = 'ecoplay_session_id';

function getSessionId() {
  let sessionId = localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export function saveGardenData(trees) {
  try {
    const sessionId = getSessionId();
    const gardenData = {
      sessionId,
      trees: trees.map(tree => ({
        typeId: tree.type.id,
        position: {
          x: tree.position.x,
          y: tree.position.y,
          z: tree.position.z
        }
      })),
      treeCount: trees.length,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(GARDEN_KEY, JSON.stringify(gardenData));
    return true;
  } catch (error) {
    console.error('Error saving garden data:', error);
    return false;
  }
}

export function loadGardenData() {
  try {
    const data = localStorage.getItem(GARDEN_KEY);
    if (!data) {
      return { trees: [], treeCount: 0 };
    }

    const gardenData = JSON.parse(data);
    const sessionId = getSessionId();

    if (gardenData.sessionId !== sessionId) {
      return { trees: [], treeCount: 0 };
    }

    return {
      trees: gardenData.trees || [],
      treeCount: gardenData.treeCount || 0
    };
  } catch (error) {
    console.error('Error loading garden data:', error);
    return { trees: [], treeCount: 0 };
  }
}

export function clearGardenData() {
  try {
    localStorage.removeItem(GARDEN_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing garden data:', error);
    return false;
  }
}
