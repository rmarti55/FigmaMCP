import React from 'react';
import { DropdownButton } from './DropdownButton';
import { SearchInput } from './SearchInput';

export function FilterBar() {
  return (
    <div style={{ padding: '16px', background: '#f9f9f9', borderRadius: '12px', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', width: '100%' }}>
        {/* Search Bar */}
        <div style={{ background: '#fff', height: 40, borderRadius: 50, width: 246, position: 'relative', display: 'flex', alignItems: 'center', border: '1px solid #000', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
          <span style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>
            {/* Figma Search Icon SVG */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.6748 0.0107422C13.0343 0.231579 16.501 3.83665 16.501 8.25098L16.4902 8.6748C16.4017 10.4227 15.7683 12.0263 14.7578 13.3213L19.8145 18.3789L19.8789 18.457C20.0068 18.6511 19.9852 18.9152 19.8145 19.0859C19.6437 19.2566 19.3805 19.2782 19.1865 19.1504L19.1074 19.0859L14.0938 14.0713C12.5999 15.5708 10.5348 16.5009 8.25098 16.501L7.82617 16.4902C3.60728 16.2765 0.224459 12.8937 0.0107422 8.6748L0 8.25098C0 3.69435 3.69435 0 8.25098 0L8.6748 0.0107422ZM8.25098 1C4.24663 1 1 4.24663 1 8.25098C1.00025 12.2551 4.24679 15.501 8.25098 15.501C12.255 15.5007 15.5007 12.255 15.501 8.25098C15.501 4.24679 12.2551 1.00025 8.25098 1Z" fill="#000"/></svg>
          </span>
          <span style={{ fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>Search Comment</span>
        </div>
        {/* Dropdowns */}
        <div style={{ display: 'flex', flex: 1, gap: '10px', minWidth: 0 }}>
          <div style={{ background: '#fff', border: '1px solid #c3c5d0', borderRadius: 50, width: 177, display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
            <span style={{ flex: 1 }}>Search Post</span>
            {/* Chevron Down SVG */}
            <svg width="24" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L8 1L1 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c3c5d0', borderRadius: 50, width: 186, display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
            <span style={{ flex: 1 }}>Show Bookmarked</span>
            <svg width="24" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L8 1L1 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c3c5d0', borderRadius: 50, width: 190, display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
            <span style={{ flex: 1 }}>Response</span>
            <svg width="24" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L8 1L1 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c3c5d0', borderRadius: 50, width: 195, display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
            <span style={{ flex: 1 }}>Comment Posted Time</span>
            <svg width="24" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L8 1L1 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ background: '#fff', border: '1px solid #c3c5d0', borderRadius: 50, width: 208, display: 'flex', alignItems: 'center', padding: '0 12px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 400, lineHeight: 1.25 }}>
            <span style={{ flex: 1 }}>Show Hidden</span>
            <svg width="24" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 8L8 1L1 8" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        {/* Refresh Button */}
        <button style={{ background: '#fff', height: 32, borderRadius: 100, border: '1px solid #000', padding: '0 16px', fontFamily: 'Futura Std, sans-serif', fontSize: 14, color: '#000', fontWeight: 700, lineHeight: 1.25, textTransform: 'uppercase', letterSpacing: 0.84, marginLeft: 'auto', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
          REFRESH
        </button>
      </div>
    </div>
  );
} 