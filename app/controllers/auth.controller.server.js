import express from "express";

// need passport
import passport from "passport";

// need to include the User module for authentication
import User from "../models/user.js";

// Display functions
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        // User is not authenticated so render the login page
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage') });
    }

    return res.redirect('/movie-list');
}

export function DisplayRegisterPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage') });
    }
}