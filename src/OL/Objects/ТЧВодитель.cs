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
    /// Т ч водитель.
    /// </summary>
    // *** Start programmer edit section *** (ТЧВодитель CustomAttributes)

    // *** End programmer edit section *** (ТЧВодитель CustomAttributes)
    [AutoAltered()]
    [Caption("Т ч водитель")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧВодительE", new string[] {
            "ТабелНомер as \'Табел номер\'",
            "Допущен as \'Допущен\'",
            "Персонал as \'Персонал\'",
            "Персонал.Контакты as \'Контакты\'"}, Hidden=new string[] {
            "Персонал.Контакты"})]
    [MasterViewDefineAttribute("ТЧВодительE", "Персонал", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Контакты")]
    [View("ТЧВодительL", new string[] {
            "ТабелНомер as \'Табел номер\'",
            "Допущен as \'Допущен\'",
            "Персонал.Контакты as \'Контакты\'"})]
    public class ТЧВодитель : ICSSoft.STORMNET.DataObject
    {
        
        private int fТабелНомер;
        
        private bool fДопущен;
        
        private IIS.OL.Персонал fПерсонал;
        
        // *** Start programmer edit section *** (ТЧВодитель CustomMembers)

        // *** End programmer edit section *** (ТЧВодитель CustomMembers)

        
        /// <summary>
        /// Допущен.
        /// </summary>
        // *** Start programmer edit section *** (ТЧВодитель.Допущен CustomAttributes)

        // *** End programmer edit section *** (ТЧВодитель.Допущен CustomAttributes)
        public virtual bool Допущен
        {
            get
            {
                // *** Start programmer edit section *** (ТЧВодитель.Допущен Get start)

                // *** End programmer edit section *** (ТЧВодитель.Допущен Get start)
                bool result = this.fДопущен;
                // *** Start programmer edit section *** (ТЧВодитель.Допущен Get end)

                // *** End programmer edit section *** (ТЧВодитель.Допущен Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧВодитель.Допущен Set start)

                // *** End programmer edit section *** (ТЧВодитель.Допущен Set start)
                this.fДопущен = value;
                // *** Start programmer edit section *** (ТЧВодитель.Допущен Set end)

                // *** End programmer edit section *** (ТЧВодитель.Допущен Set end)
            }
        }
        
        /// <summary>
        /// ТабелНомер.
        /// </summary>
        // *** Start programmer edit section *** (ТЧВодитель.ТабелНомер CustomAttributes)

        // *** End programmer edit section *** (ТЧВодитель.ТабелНомер CustomAttributes)
        public virtual int ТабелНомер
        {
            get
            {
                // *** Start programmer edit section *** (ТЧВодитель.ТабелНомер Get start)

                // *** End programmer edit section *** (ТЧВодитель.ТабелНомер Get start)
                int result = this.fТабелНомер;
                // *** Start programmer edit section *** (ТЧВодитель.ТабелНомер Get end)

                // *** End programmer edit section *** (ТЧВодитель.ТабелНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧВодитель.ТабелНомер Set start)

                // *** End programmer edit section *** (ТЧВодитель.ТабелНомер Set start)
                this.fТабелНомер = value;
                // *** Start programmer edit section *** (ТЧВодитель.ТабелНомер Set end)

                // *** End programmer edit section *** (ТЧВодитель.ТабелНомер Set end)
            }
        }
        
        /// <summary>
        /// Т ч водитель.
        /// </summary>
        // *** Start programmer edit section *** (ТЧВодитель.Персонал CustomAttributes)

        // *** End programmer edit section *** (ТЧВодитель.Персонал CustomAttributes)
        [PropertyStorage(new string[] {
                "Персонал"})]
        [NotNull()]
        public virtual IIS.OL.Персонал Персонал
        {
            get
            {
                // *** Start programmer edit section *** (ТЧВодитель.Персонал Get start)

                // *** End programmer edit section *** (ТЧВодитель.Персонал Get start)
                IIS.OL.Персонал result = this.fПерсонал;
                // *** Start programmer edit section *** (ТЧВодитель.Персонал Get end)

                // *** End programmer edit section *** (ТЧВодитель.Персонал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧВодитель.Персонал Set start)

                // *** End programmer edit section *** (ТЧВодитель.Персонал Set start)
                this.fПерсонал = value;
                // *** Start programmer edit section *** (ТЧВодитель.Персонал Set end)

                // *** End programmer edit section *** (ТЧВодитель.Персонал Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧВодительE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧВодительE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧВодительE", typeof(IIS.OL.ТЧВодитель));
                }
            }
            
            /// <summary>
            /// "ТЧВодительL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧВодительL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧВодительL", typeof(IIS.OL.ТЧВодитель));
                }
            }
        }
    }
}
