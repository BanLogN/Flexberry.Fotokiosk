﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Прайс лист.
    /// </summary>
    // *** Start programmer edit section *** (ПрайсЛист CustomAttributes)

    // *** End programmer edit section *** (ПрайсЛист CustomAttributes)
    [AutoAltered()]
    [Caption("Прайс лист")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПрайсЛистE", new string[] {
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    [View("ПрайсЛистL", new string[] {
            "Наименование as \'Наименование\'",
            "Цена as \'Цена\'"})]
    public class ПрайсЛист : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private double fЦена;
        
        // *** Start programmer edit section *** (ПрайсЛист CustomMembers)

        // *** End programmer edit section *** (ПрайсЛист CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ПрайсЛист.Наименование CustomAttributes)

        // *** End programmer edit section *** (ПрайсЛист.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ПрайсЛист.Наименование Get start)

                // *** End programmer edit section *** (ПрайсЛист.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (ПрайсЛист.Наименование Get end)

                // *** End programmer edit section *** (ПрайсЛист.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПрайсЛист.Наименование Set start)

                // *** End programmer edit section *** (ПрайсЛист.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ПрайсЛист.Наименование Set end)

                // *** End programmer edit section *** (ПрайсЛист.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (ПрайсЛист.Цена CustomAttributes)

        // *** End programmer edit section *** (ПрайсЛист.Цена CustomAttributes)
        public virtual double Цена
        {
            get
            {
                // *** Start programmer edit section *** (ПрайсЛист.Цена Get start)

                // *** End programmer edit section *** (ПрайсЛист.Цена Get start)
                double result = this.fЦена;
                // *** Start programmer edit section *** (ПрайсЛист.Цена Get end)

                // *** End programmer edit section *** (ПрайсЛист.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПрайсЛист.Цена Set start)

                // *** End programmer edit section *** (ПрайсЛист.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (ПрайсЛист.Цена Set end)

                // *** End programmer edit section *** (ПрайсЛист.Цена Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПрайсЛистE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрайсЛистE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрайсЛистE", typeof(IIS.Fotokiosk.ПрайсЛист));
                }
            }
            
            /// <summary>
            /// "ПрайсЛистL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПрайсЛистL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПрайсЛистL", typeof(IIS.Fotokiosk.ПрайсЛист));
                }
            }
        }
    }
}
