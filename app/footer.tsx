'use client'

import GoogleMap from '../utils/googleMap'

export default function Footer() {
  const exampleAddress = 'ul. Piotrkowska 1, Łódź';
  return (
    <footer className="px-6">
      <div className="pt-20 pb-16 tracking-widest text-center text-blue-900 text-xl uppercase">Contact us</div>
      <div className="flex">
        <div className="basis-3/5 pr-4">
          <div className="text-blue-900 text-lg pb-8 uppercase">Address</div>
          <div className="font-light text-slate-500">{exampleAddress}</div>
          <div className="font-light text-slate-500">90-406, Polska</div>
          <GoogleMap className="h-60 mt-4" address={exampleAddress} />
        </div>
        <div className="basis-2/5">
          <div className="text-blue-900 text-lg pb-8 uppercase">{`Ask any question, we're here to help:`}</div>
        </div>
      </div>
    </footer>
  );
}