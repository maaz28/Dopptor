import React from "react";
import { Redirect } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Calender from "../components/Calender";
import Invoice from "../components/Invoice";
import Basics from "../components/forms/Basics";
import Select2 from '../components/forms/Select2';
import InputGroups from "../components/forms/InputGroups";
import CheckboxRadio from "../components/forms/CheckboxRadio";
import DatePicker from "../components/forms/DatePicker";
import Ajax from "../components/datatables/Ajax";
import checkbox from "../components/datatables/checkbox";

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
    path: '/forms/checkbox-radio',
    component: CheckboxRadio
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
