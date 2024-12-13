// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader } from '../components/ui/card';
// import { Button } from '../components/ui/button';

// const UberAirportBookingPreview = () => {
//   const [currentStep, setCurrentStep] = useState('airport-selection');
  
//   const AIRPORTS = ['SFO', 'LAX', 'JFK', 'ORD'];
//   const TERMINALS = {
//     'SFO': ['Terminal 1', 'Terminal 2', 'Terminal 3'],
//     'LAX': ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 4'],
//     'JFK': ['Terminal 1', 'Terminal 2', 'Terminal 4', 'Terminal 5', 'Terminal 7'],
//     'ORD': ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 5']
//   };
//   const PICKUP_ZONES = [
//     'Domestic Arrivals', 
//     'International Arrivals', 
//     'Baggage Claim', 
//     'Rideshare Pickup Zone'
//   ];

//   const renderStep = () => {
//     switch(currentStep) {
//       case 'airport-selection':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold">Select Airport</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {AIRPORTS.map(airport => (
//                 <Button 
//                   key={airport} 
//                   variant="outline"
//                   onClick={() => setCurrentStep('terminal-selection')}
//                 >
//                   {airport}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         );
      
//       case 'terminal-selection':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold">Select Terminal</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {TERMINALS['SFO'].map(terminal => (
//                 <Button 
//                   key={terminal} 
//                   variant="outline"
//                   onClick={() => setCurrentStep('pickup-zone')}
//                 >
//                   {terminal}
//                 </Button>
//               ))}
//             </div>
//             <Button 
//               variant="secondary"
//               onClick={() => setCurrentStep('airport-selection')}
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'pickup-zone':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold">Select Pickup Zone</h2>
//             <div className="grid grid-cols-2 gap-4">
//               {PICKUP_ZONES.map(zone => (
//                 <Button 
//                   key={zone} 
//                   variant="outline"
//                   onClick={() => setCurrentStep('fare-confirmation')}
//                 >
//                   {zone}
//                 </Button>
//               ))}
//             </div>
//             <Button 
//               variant="secondary"
//               onClick={() => setCurrentStep('terminal-selection')}
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'fare-confirmation':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold">Fare Confirmation</h2>
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <div className="flex justify-between mb-2">
//                 <span>Base Fare</span>
//                 <span>$12.50</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Airport Fee</span>
//                 <span>$5.00</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Peak Hour Surcharge</span>
//                 <span>$2.50</span>
//               </div>
//               <div className="flex justify-between font-bold border-t pt-2">
//                 <span>Total</span>
//                 <span>$20.00</span>
//               </div>
//             </div>
//             <Button 
//               variant="default"
//               onClick={() => setCurrentStep('booking-complete')}
//             >
//               Confirm Booking
//             </Button>
//             <Button 
//               variant="secondary"
//               onClick={() => setCurrentStep('pickup-zone')}
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'booking-complete':
//         return (
//           <div className="space-y-4 text-center">
//             <h2 className="text-2xl font-bold text-green-600">Booking Confirmed!</h2>
//             <div className="bg-green-50 p-4 rounded-lg">
//               <p className="mb-2"><strong>Booking ID:</strong> UB{Math.floor(Math.random() * 10000)}</p>
//               <p className="mb-2"><strong>Airport:</strong> SFO</p>
//               <p className="mb-2"><strong>Terminal:</strong> Terminal 2</p>
//               <p className="mb-2"><strong>Pickup Zone:</strong> Rideshare Pickup</p>
//             </div>
//             <Button 
//               variant="default"
//               onClick={() => setCurrentStep('airport-selection')}
//             >
//               Book Another Ride
//             </Button>
//           </div>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card className="w-96 shadow-xl">
//         <CardHeader className="bg-blue-500 text-white text-center">
//           <h1 className="text-2xl font-bold">Uber Airport Booking</h1>
//         </CardHeader>
//         <CardContent className="p-6">
//           {renderStep()}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default UberAirportBookingPreview;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';

const UberAirportBookingPreview = () => {
  const [currentStep, setCurrentStep] = useState('airport-selection');

  const AIRPORTS = ['SFO', 'LAX', 'JFK', 'ORD'];
  const TERMINALS = {
    SFO: ['Terminal 1', 'Terminal 2', 'Terminal 3'],
    LAX: ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 4'],
    JFK: ['Terminal 1', 'Terminal 2', 'Terminal 4', 'Terminal 5', 'Terminal 7'],
    ORD: ['Terminal 1', 'Terminal 2', 'Terminal 3', 'Terminal 5'],
  };
  const PICKUP_ZONES = [
    'Domestic Arrivals',
    'International Arrivals',
    'Baggage Claim',
    'Rideshare Pickup Zone',
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 'airport-selection':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">Select Airport</h2>
            <div className="grid grid-cols-2 gap-4">
              {AIRPORTS.map((airport) => (
                <Button
                  key={airport}
                  className="hover:scale-105 transition-transform"
                  variant="outline"
                  onClick={() => setCurrentStep('terminal-selection')}
                >
                  <span className="text-lg font-semibold">{airport}</span>
                </Button>
              ))}
            </div>
          </div>
        );

      case 'terminal-selection':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">Select Terminal</h2>
            <div className="grid grid-cols-2 gap-4">
              {TERMINALS['SFO'].map((terminal) => (
                <Button
                  key={terminal}
                  className="hover:scale-105 transition-transform"
                  variant="outline"
                  onClick={() => setCurrentStep('pickup-zone')}
                >
                  <span className="text-lg font-semibold">{terminal}</span>
                </Button>
              ))}
            </div>
            <Button
              className="hover:bg-red-500 transition-colors"
              variant="secondary"
              onClick={() => setCurrentStep('airport-selection')}
            >
              Back
            </Button>
          </div>
        );

      case 'pickup-zone':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">Select Pickup Zone</h2>
            <div className="grid grid-cols-2 gap-4">
              {PICKUP_ZONES.map((zone) => (
                <Button
                  key={zone}
                  className="hover:scale-105 transition-transform"
                  variant="outline"
                  onClick={() => setCurrentStep('fare-confirmation')}
                >
                  <span className="text-lg font-semibold">{zone}</span>
                </Button>
              ))}
            </div>
            <Button
              className="hover:bg-red-500 transition-colors"
              variant="secondary"
              onClick={() => setCurrentStep('terminal-selection')}
            >
              Back
            </Button>
          </div>
        );

      case 'fare-confirmation':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-green-600">Fare Confirmation</h2>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Base Fare</span>
                <span className="font-medium">$12.50</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="font-medium">Airport Fee</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="font-medium">Peak Hour Surcharge</span>
                <span className="font-medium">$2.50</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-3">
                <span>Total</span>
                <span>$20.00</span>
              </div>
            </div>
            <div className="flex justify-around">
              <Button
                className="hover:bg-blue-600 transition-colors"
                variant="default"
                onClick={() => setCurrentStep('booking-complete')}
              >
                Confirm Booking
              </Button>
              <Button
                className="hover:bg-red-500 transition-colors"
                variant="secondary"
                onClick={() => setCurrentStep('pickup-zone')}
              >
                Back
              </Button>
            </div>
          </div>
        );

      case 'booking-complete':
        return (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-green-600 animate-bounce">Booking Confirmed!</h2>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <p className="mb-2 text-lg"><strong>Booking ID:</strong> UB{Math.floor(Math.random() * 10000)}</p>
              <p className="mb-2 text-lg"><strong>Airport:</strong> SFO</p>
              <p className="mb-2 text-lg"><strong>Terminal:</strong> Terminal 2</p>
              <p className="mb-2 text-lg"><strong>Pickup Zone:</strong> Rideshare Pickup</p>
            </div>
            <Button
              className="hover:bg-blue-600 transition-colors"
              variant="default"
              onClick={() => setCurrentStep('airport-selection')}
            >
              Book Another Ride
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <Card className="w-96 shadow-2xl transform hover:scale-105 transition-transform">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
          <h1 className="text-3xl font-extrabold">Uber Airport Booking</h1>
        </CardHeader>
        <CardContent className="p-8">
          {renderStep()}
        </CardContent>
      </Card>
    </div>
  );
};

export default UberAirportBookingPreview;
