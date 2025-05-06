cd client && cd src && mkdir assets components pages contexts datasets hooks layouts routes utils && 

cd assets && mkdir fonts images && touch index.js && cd .. && 
cd components && mkdir global user public admin && touch index.js && cd .. && 
cd pages && mkdir public user admin && touch index.js && cd .. && 
cd contexts && mkdir public user admin && touch index.js && cd .. && 
cd datasets && touch index.js && mkdir public user global admin && cd .. && 
cd hooks && touch index.js && cd .. && 
cd layouts && touch index.js && mkdir public user admin && cd .. && 
cd routes && touch index.js && mkdir user public admin && cd .. && 
cd utils && mkdir user public global admin && touch index.js && cd .. && 

touch Routes.jsx