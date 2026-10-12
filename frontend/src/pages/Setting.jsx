import React, { useState } from "react";
import {THEMES} from "../constant/index.js"
import { useThemeStore } from "../store/useThemeStore.js";
const Setting = () => {
  const {theme, setTheme}= useThemeStore()

 
  
  return (
    <div>
      <div className="min-h-screen bg-base-200 pt-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-base-100 rounded-2xl shadow-lg p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Settings</h1>

              <p className="text-base-content/60 mt-1">
                Manage your application preferences
              </p>
            </div>

            {/* Appearance */}
            <div>
              <h2 className="text-lg font-semibold">Appearance</h2>

              <p className="text-sm text-base-content/60 mt-1">
                Customize how the application looks
              </p>
            </div>

            <div className="divider"></div>

            {/* Theme */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Theme</h3>

                <p className="text-sm text-base-content/60">
                  Choose your preferred theme
                </p>
              </div>

              <select
                value={theme}
                onChange={(e) =>setTheme(e.target.value)}
                className="select select-bordered"
              >
               {
                  THEMES.map(t=>
                    <option key={t} value={t}>{t}</option>
                  )
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
