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
    /// Трудозатраты.
    /// </summary>
    // *** Start programmer edit section *** (Трудозатраты CustomAttributes)

    // *** End programmer edit section *** (Трудозатраты CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТрудозатратыE", new string[] {
            "ДатаОтчета as \'Дата отчета\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИОСотрудника as \'Ф и о сотрудника\'"}, Hidden=new string[] {
            "Сотрудники.ФИОСотрудника"})]
    [AssociatedDetailViewAttribute("ТрудозатратыE", "РасходМатериад", "РасходМатериадE", true, "", "Расход материад", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ТрудозатратыE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОСотрудника")]
    [View("ТрудозатратыL", new string[] {
            "ДатаОтчета as \'Дата отчета\'",
            "Сотрудники.ФИОСотрудника as \'Ф и о сотрудника\'"})]
    public class Трудозатраты : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаОтчета;
        
        private IIS.Fotokiosk.Сотрудники fСотрудники;
        
        private IIS.Fotokiosk.DetailArrayOfРасходМатериад fРасходМатериад;
        
        // *** Start programmer edit section *** (Трудозатраты CustomMembers)

        // *** End programmer edit section *** (Трудозатраты CustomMembers)

        
        /// <summary>
        /// ДатаОтчета.
        /// </summary>
        // *** Start programmer edit section *** (Трудозатраты.ДатаОтчета CustomAttributes)

        // *** End programmer edit section *** (Трудозатраты.ДатаОтчета CustomAttributes)
        public virtual System.DateTime ДатаОтчета
        {
            get
            {
                // *** Start programmer edit section *** (Трудозатраты.ДатаОтчета Get start)

                // *** End programmer edit section *** (Трудозатраты.ДатаОтчета Get start)
                System.DateTime result = this.fДатаОтчета;
                // *** Start programmer edit section *** (Трудозатраты.ДатаОтчета Get end)

                // *** End programmer edit section *** (Трудозатраты.ДатаОтчета Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Трудозатраты.ДатаОтчета Set start)

                // *** End programmer edit section *** (Трудозатраты.ДатаОтчета Set start)
                this.fДатаОтчета = value;
                // *** Start programmer edit section *** (Трудозатраты.ДатаОтчета Set end)

                // *** End programmer edit section *** (Трудозатраты.ДатаОтчета Set end)
            }
        }
        
        /// <summary>
        /// Трудозатраты.
        /// </summary>
        // *** Start programmer edit section *** (Трудозатраты.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Трудозатраты.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Fotokiosk.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Трудозатраты.Сотрудники Get start)

                // *** End programmer edit section *** (Трудозатраты.Сотрудники Get start)
                IIS.Fotokiosk.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Трудозатраты.Сотрудники Get end)

                // *** End programmer edit section *** (Трудозатраты.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Трудозатраты.Сотрудники Set start)

                // *** End programmer edit section *** (Трудозатраты.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Трудозатраты.Сотрудники Set end)

                // *** End programmer edit section *** (Трудозатраты.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Трудозатраты.
        /// </summary>
        // *** Start programmer edit section *** (Трудозатраты.РасходМатериад CustomAttributes)

        // *** End programmer edit section *** (Трудозатраты.РасходМатериад CustomAttributes)
        public virtual IIS.Fotokiosk.DetailArrayOfРасходМатериад РасходМатериад
        {
            get
            {
                // *** Start programmer edit section *** (Трудозатраты.РасходМатериад Get start)

                // *** End programmer edit section *** (Трудозатраты.РасходМатериад Get start)
                if ((this.fРасходМатериад == null))
                {
                    this.fРасходМатериад = new IIS.Fotokiosk.DetailArrayOfРасходМатериад(this);
                }
                IIS.Fotokiosk.DetailArrayOfРасходМатериад result = this.fРасходМатериад;
                // *** Start programmer edit section *** (Трудозатраты.РасходМатериад Get end)

                // *** End programmer edit section *** (Трудозатраты.РасходМатериад Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Трудозатраты.РасходМатериад Set start)

                // *** End programmer edit section *** (Трудозатраты.РасходМатериад Set start)
                this.fРасходМатериад = value;
                // *** Start programmer edit section *** (Трудозатраты.РасходМатериад Set end)

                // *** End programmer edit section *** (Трудозатраты.РасходМатериад Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТрудозатратыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТрудозатратыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТрудозатратыE", typeof(IIS.Fotokiosk.Трудозатраты));
                }
            }
            
            /// <summary>
            /// "ТрудозатратыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТрудозатратыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТрудозатратыL", typeof(IIS.Fotokiosk.Трудозатраты));
                }
            }
        }
    }
}
