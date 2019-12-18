import {NgModule} from '@angular/core';
import {
       NativeDateAdapter,
       MAT_DATE_LOCALE,
       DateAdapter,
       MAT_DATE_FORMATS
       } from "@angular/material";
import {
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS
  } from '@angular/material-moment-adapter';

  export const APP_DATE_FORMATS =
  {
     parse: {
         dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
     },
     display: {
         // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
         dateInput: 'input',
         // monthYearLabel: { month: 'short', year: 'numeric', day: 'numeric' },
         monthYearLabel: 'inputMonth',
         dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
         monthYearA11yLabel: {year: 'numeric', month: 'long'},
     }
     
  };
  export const  nativeDateAdapter = NativeDateAdapter
  export const mAT_DATE_LOCALE = MAT_DATE_LOCALE
  export const  DateAdapte = DateAdapter
  export const mAT_DATE_FORMATS = MAT_DATE_FORMATS
  export const  mAT_MOMENT_DATE_FORMATS = MAT_MOMENT_DATE_FORMATS
  export const  momentDateAdapter = MomentDateAdapter
  export const mAT_MOMENT_DATE_ADAPTER_OPTIONS = MAT_MOMENT_DATE_ADAPTER_OPTIONS
  
