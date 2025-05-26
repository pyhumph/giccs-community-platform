import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Mail, Phone } from 'lucide-react';

const Sheet = ({ children, open, onOpenChange }) => {
    return (
      <>
        {children}
        {open && (
          <div 
            className="fixed inset-0  opacity-50 z-40 transition-opacity duration-300"
            onClick={() => onOpenChange(false)}
          />
        )}
      </>
    );
  };
  
  const SheetTrigger = ({ children, asChild, ...props }) => {
    return React.cloneElement(children, props);
  };
  
  const SheetContent = ({ children, side = "right", className = "", open, onClose, ...props }) => {
    // Animation classes based on side and open state
    const getTransformClasses = () => {
      if (!open) {
        switch (side) {
          case 'left':
            return '-translate-x-full';
          case 'right':
            return 'translate-x-full';
          case 'top':
            return '-translate-y-full';
          case 'bottom':
            return 'translate-y-full';
          default:
            return '-translate-x-full';
        }
      }
      return 'translate-x-0 translate-y-0';
    };
  
    const getPositionClasses = () => {
      switch (side) {
        case 'left':
          return 'left-0 top-0 h-full';
        case 'right':
          return 'right-0 top-0 h-full';
        case 'top':
          return 'top-0 left-0 w-full';
        case 'bottom':
          return 'bottom-0 left-0 w-full';
        default:
          return 'left-0 top-0 h-full';
      }
    };
  
    if (!open) return null;
  
    return (
      <div 
        className={`fixed ${getPositionClasses()} 
          bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${getTransformClasses()} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  const SheetHeader = ({ children, className = "", ...props }) => {
    return (
      <div className={`flex flex-col space-y-2 ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const SheetTitle = ({ children, className = "", ...props }) => {
    return (
      <h2 className={`text-lg font-semibold ${className}`} {...props}>
        {children}
      </h2>
    );
  };


export {Sheet, SheetContent, SheetHeader, SheetTrigger, SheetTitle};