import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Calender from "../components/Calender";
import Invoice from "../components/Invoice";
import Basics from "../components/Basics";
import Select2 from '../components/Select2';
import InputGroups from "../components/InputGroups";
import CheckboxRadio from "../components/CheckboxRadio";
import DatePicker from "../components/DatePicker";
import Ajax from "../components/Ajax";
import checkbox from "../components/checkbox";

// Route Views


export default [
  {
    path: "/",
    exact: true,
    component: Dashboard
  },
  {
    path: "/calendar",
    component: Calender
  },
  {
    path: "/invoice",
    component: Invoice
  },
  {
    path: "/forms/basic",
    component: Basics
  },
  {
    path: "/forms/select",
    component: Select2
  },
  {
    path: "/forms/input-groups",
    component: InputGroups
  },
  {
    path: "/forms/date-picker",
    component: DatePicker
  },
  {
    path : '/forms/checkbox-radio',
    component : CheckboxRadio
  },
  {
    path: "/data/ajax",
    component: Ajax
  },
  {
    path: "/data/checkbox",
    component: checkbox
  }
];
