import React from 'react';
import { useSelector } from 'react-redux';

const Lecteur = () => {
  const { theme, language, notifications } = useSelector((state) => state);

  return (
    <div className='main'>
      <div className={theme === "light" ? "lcard" : "dcard"}>
        <p>Mode: {theme === "light" ? "Clair" : "Sombre"}</p>
        <p>Langue: {language === "fr" ? "Français" : language === "en" ? "English" : language === "ar" ? "العربية" : "Español"}</p>
        <p>Notifications: {notifications ? "Activées" : "Désactivées"}</p>
      </div>
      <div>
      {language === "fr" && (
        <div>
          <h1>Bienvenue dans le Gestionnaire de Préférences de l'Utilisateur!</h1>
          <p>Ce guide vous aidera à comprendre comment utiliser l'application Gestionnaire de Préférences de l'Utilisateur. L'application permet aux utilisateurs de personnaliser leur expérience en définissant des préférences pour le mode d'affichage, la langue et les paramètres de notification.</p>
          <h3>Fonctionnalités principales</h3>
          <ol>
            <li><span>Mode d'affichage :</span> Choisissez entre le mode clair et le mode foncé.</li>
            <li><span>Langue :</span> Sélectionnez votre langue préférée pour l'interface de l'application.</li>
            <li><span>Notifications :</span> Activer ou désactiver les notifications.</li>
          </ol>
        </div>
      )}
        {language === "en" && <div>
          <h1>Welcome to the User Preference Manager!</h1>
          <p>This guide will help you understand how to use the User Preference Manager application. The application allows users to customize their experience by setting preferences for display mode, language, and notification settings.</p>
          <h3>Key Features</h3>
          <ol>
            <li><span>Display Mode:</span> Choose between light and dark mode.</li>
            <li><span>Language:</span> Select your preferred language for the application interface.</li>
            <li><span>Notifications:</span> Enable or disable notifications.</li>
            
          </ol>
        </div>}
        {language === "ar" && <div>
            <h1>مرحبًا بك في مدير تفضيلات المستخدم!</h1>
            <p>هذا الدليل سيساعدك على فهم كيفية استخدام تطبيق مدير تفضيلات المستخدم. يسمح التطبيق للمستخدمين بتخصيص تجربتهم من خلال تحديد تفضيلاتهم لوضع العرض، واللغة، والإعدادات الخاصة بالإشعارات.</p>
            <h3>الميزات الرئيسية</h3>
            <ol>
              <li><span>وضع العرض:</span> اختر بين الوضع الفاتح أو الداكن</li>
              <li><span>اللغة:</span> اختر اللغة المفضلة لديك لواجهة التطبيق.</li>
              <li><span>الإشعارات:</span> تفعيل أو تعطيل الإشعارات.</li>
            </ol>
          </div>
        }
        {language === "es" && <div>
            <h1>¡Bienvenido al Gestor de Preferencias del Usuario!</h1>
            <p>Esta guía te ayudará a entender cómo usar la aplicación Gestor de Preferencias del Usuario. La aplicación permite a los usuarios personalizar su experiencia configurando preferencias para el modo de visualización, el idioma y las configuraciones de notificaciones.</p>
            <h3>Funciones principales</h3>
            <ol>
              <li><span>Modo de visualización:</span> Elige entre el modo claro y el modo oscuro.</li>
              <li><span>Idioma:</span> Selecciona tu idioma preferido para la interfaz de la aplicación.</li>
              <li><span>Notificaciones:</span> Activar o desactivar las notificaciones.</li>
            </ol>
          </div>
        }

      </div>
    </div>
  );
};

export default Lecteur;