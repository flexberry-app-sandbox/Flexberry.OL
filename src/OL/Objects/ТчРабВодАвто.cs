﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OL
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Тч раб вод авто.
    /// </summary>
    // *** Start programmer edit section *** (ТчРабВодАвто CustomAttributes)

    // *** End programmer edit section *** (ТчРабВодАвто CustomAttributes)
    [AutoAltered()]
    [Caption("Тч раб вод авто")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТчРабВодАвтоE", new string[] {
            "ПоказСпидом as \'Показ спидом\'",
            "ВремяРаботы as \'Время работы\'",
            "НулевойПробег as \'Нулевой пробег\'",
            "ДатаВремя as \'Дата время\'"})]
    [View("ТчРабВодАвтоL", new string[] {
            "ПоказСпидом as \'Показ спидом\'",
            "ВремяРаботы as \'Время работы\'",
            "НулевойПробег as \'Нулевой пробег\'",
            "ДатаВремя as \'Дата время\'"})]
    public class ТчРабВодАвто : ICSSoft.STORMNET.DataObject
    {
        
        private double fПоказСпидом;
        
        private double fВремяРаботы;
        
        private double fНулевойПробег;
        
        private System.DateTime fДатаВремя;
        
        // *** Start programmer edit section *** (ТчРабВодАвто CustomMembers)

        // *** End programmer edit section *** (ТчРабВодАвто CustomMembers)

        
        /// <summary>
        /// ВремяРаботы.
        /// </summary>
        // *** Start programmer edit section *** (ТчРабВодАвто.ВремяРаботы CustomAttributes)

        // *** End programmer edit section *** (ТчРабВодАвто.ВремяРаботы CustomAttributes)
        public virtual double ВремяРаботы
        {
            get
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ВремяРаботы Get start)

                // *** End programmer edit section *** (ТчРабВодАвто.ВремяРаботы Get start)
                double result = this.fВремяРаботы;
                // *** Start programmer edit section *** (ТчРабВодАвто.ВремяРаботы Get end)

                // *** End programmer edit section *** (ТчРабВодАвто.ВремяРаботы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ВремяРаботы Set start)

                // *** End programmer edit section *** (ТчРабВодАвто.ВремяРаботы Set start)
                this.fВремяРаботы = value;
                // *** Start programmer edit section *** (ТчРабВодАвто.ВремяРаботы Set end)

                // *** End programmer edit section *** (ТчРабВодАвто.ВремяРаботы Set end)
            }
        }
        
        /// <summary>
        /// ДатаВремя.
        /// </summary>
        // *** Start programmer edit section *** (ТчРабВодАвто.ДатаВремя CustomAttributes)

        // *** End programmer edit section *** (ТчРабВодАвто.ДатаВремя CustomAttributes)
        public virtual System.DateTime ДатаВремя
        {
            get
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ДатаВремя Get start)

                // *** End programmer edit section *** (ТчРабВодАвто.ДатаВремя Get start)
                System.DateTime result = this.fДатаВремя;
                // *** Start programmer edit section *** (ТчРабВодАвто.ДатаВремя Get end)

                // *** End programmer edit section *** (ТчРабВодАвто.ДатаВремя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ДатаВремя Set start)

                // *** End programmer edit section *** (ТчРабВодАвто.ДатаВремя Set start)
                this.fДатаВремя = value;
                // *** Start programmer edit section *** (ТчРабВодАвто.ДатаВремя Set end)

                // *** End programmer edit section *** (ТчРабВодАвто.ДатаВремя Set end)
            }
        }
        
        /// <summary>
        /// НулевойПробег.
        /// </summary>
        // *** Start programmer edit section *** (ТчРабВодАвто.НулевойПробег CustomAttributes)

        // *** End programmer edit section *** (ТчРабВодАвто.НулевойПробег CustomAttributes)
        public virtual double НулевойПробег
        {
            get
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.НулевойПробег Get start)

                // *** End programmer edit section *** (ТчРабВодАвто.НулевойПробег Get start)
                double result = this.fНулевойПробег;
                // *** Start programmer edit section *** (ТчРабВодАвто.НулевойПробег Get end)

                // *** End programmer edit section *** (ТчРабВодАвто.НулевойПробег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.НулевойПробег Set start)

                // *** End programmer edit section *** (ТчРабВодАвто.НулевойПробег Set start)
                this.fНулевойПробег = value;
                // *** Start programmer edit section *** (ТчРабВодАвто.НулевойПробег Set end)

                // *** End programmer edit section *** (ТчРабВодАвто.НулевойПробег Set end)
            }
        }
        
        /// <summary>
        /// ПоказСпидом.
        /// </summary>
        // *** Start programmer edit section *** (ТчРабВодАвто.ПоказСпидом CustomAttributes)

        // *** End programmer edit section *** (ТчРабВодАвто.ПоказСпидом CustomAttributes)
        public virtual double ПоказСпидом
        {
            get
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ПоказСпидом Get start)

                // *** End programmer edit section *** (ТчРабВодАвто.ПоказСпидом Get start)
                double result = this.fПоказСпидом;
                // *** Start programmer edit section *** (ТчРабВодАвто.ПоказСпидом Get end)

                // *** End programmer edit section *** (ТчРабВодАвто.ПоказСпидом Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчРабВодАвто.ПоказСпидом Set start)

                // *** End programmer edit section *** (ТчРабВодАвто.ПоказСпидом Set start)
                this.fПоказСпидом = value;
                // *** Start programmer edit section *** (ТчРабВодАвто.ПоказСпидом Set end)

                // *** End programmer edit section *** (ТчРабВодАвто.ПоказСпидом Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТчРабВодАвтоE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТчРабВодАвтоE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТчРабВодАвтоE", typeof(IIS.OL.ТчРабВодАвто));
                }
            }
            
            /// <summary>
            /// "ТчРабВодАвтоL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТчРабВодАвтоL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТчРабВодАвтоL", typeof(IIS.OL.ТчРабВодАвто));
                }
            }
        }
    }
}
