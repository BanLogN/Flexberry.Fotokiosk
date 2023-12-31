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
    /// Услуга.
    /// </summary>
    // *** Start programmer edit section *** (Услуга CustomAttributes)

    // *** End programmer edit section *** (Услуга CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугаE", new string[] {
            "ДатаУслуги as \'Дата услуги\'",
            "ПрайсЛист as \'Прайс лист\'",
            "ПрайсЛист.Наименование as \'Наименование\'",
            "ЗаписьВремя as \'Запись время\'",
            "ЗаписьВремя.Время as \'Время\'"}, Hidden=new string[] {
            "ПрайсЛист.Наименование",
            "ЗаписьВремя.Время"})]
    [MasterViewDefineAttribute("УслугаE", "ПрайсЛист", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("УслугаE", "ЗаписьВремя", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    public class Услуга : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаУслуги;
        
        private IIS.Fotokiosk.ПрайсЛист fПрайсЛист;
        
        private IIS.Fotokiosk.ЗаписьВремя fЗаписьВремя;
        
        private IIS.Fotokiosk.ЗаписьКлиента fЗаписьКлиента;
        
        // *** Start programmer edit section *** (Услуга CustomMembers)

        // *** End programmer edit section *** (Услуга CustomMembers)

        
        /// <summary>
        /// ДатаУслуги.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.ДатаУслуги CustomAttributes)

        // *** End programmer edit section *** (Услуга.ДатаУслуги CustomAttributes)
        public virtual System.DateTime ДатаУслуги
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.ДатаУслуги Get start)

                // *** End programmer edit section *** (Услуга.ДатаУслуги Get start)
                System.DateTime result = this.fДатаУслуги;
                // *** Start programmer edit section *** (Услуга.ДатаУслуги Get end)

                // *** End programmer edit section *** (Услуга.ДатаУслуги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.ДатаУслуги Set start)

                // *** End programmer edit section *** (Услуга.ДатаУслуги Set start)
                this.fДатаУслуги = value;
                // *** Start programmer edit section *** (Услуга.ДатаУслуги Set end)

                // *** End programmer edit section *** (Услуга.ДатаУслуги Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.ЗаписьВремя CustomAttributes)

        // *** End programmer edit section *** (Услуга.ЗаписьВремя CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗаписьВремя"})]
        [NotNull()]
        public virtual IIS.Fotokiosk.ЗаписьВремя ЗаписьВремя
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.ЗаписьВремя Get start)

                // *** End programmer edit section *** (Услуга.ЗаписьВремя Get start)
                IIS.Fotokiosk.ЗаписьВремя result = this.fЗаписьВремя;
                // *** Start programmer edit section *** (Услуга.ЗаписьВремя Get end)

                // *** End programmer edit section *** (Услуга.ЗаписьВремя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.ЗаписьВремя Set start)

                // *** End programmer edit section *** (Услуга.ЗаписьВремя Set start)
                this.fЗаписьВремя = value;
                // *** Start programmer edit section *** (Услуга.ЗаписьВремя Set end)

                // *** End programmer edit section *** (Услуга.ЗаписьВремя Set end)
            }
        }
        
        /// <summary>
        /// Услуга.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.ПрайсЛист CustomAttributes)

        // *** End programmer edit section *** (Услуга.ПрайсЛист CustomAttributes)
        [PropertyStorage(new string[] {
                "ПрайсЛист"})]
        [NotNull()]
        public virtual IIS.Fotokiosk.ПрайсЛист ПрайсЛист
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.ПрайсЛист Get start)

                // *** End programmer edit section *** (Услуга.ПрайсЛист Get start)
                IIS.Fotokiosk.ПрайсЛист result = this.fПрайсЛист;
                // *** Start programmer edit section *** (Услуга.ПрайсЛист Get end)

                // *** End programmer edit section *** (Услуга.ПрайсЛист Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.ПрайсЛист Set start)

                // *** End programmer edit section *** (Услуга.ПрайсЛист Set start)
                this.fПрайсЛист = value;
                // *** Start programmer edit section *** (Услуга.ПрайсЛист Set end)

                // *** End programmer edit section *** (Услуга.ПрайсЛист Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Fotokiosk.ЗаписьКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.ЗаписьКлиента CustomAttributes)

        // *** End programmer edit section *** (Услуга.ЗаписьКлиента CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ЗаписьКлиента"})]
        public virtual IIS.Fotokiosk.ЗаписьКлиента ЗаписьКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.ЗаписьКлиента Get start)

                // *** End programmer edit section *** (Услуга.ЗаписьКлиента Get start)
                IIS.Fotokiosk.ЗаписьКлиента result = this.fЗаписьКлиента;
                // *** Start programmer edit section *** (Услуга.ЗаписьКлиента Get end)

                // *** End programmer edit section *** (Услуга.ЗаписьКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.ЗаписьКлиента Set start)

                // *** End programmer edit section *** (Услуга.ЗаписьКлиента Set start)
                this.fЗаписьКлиента = value;
                // *** Start programmer edit section *** (Услуга.ЗаписьКлиента Set end)

                // *** End programmer edit section *** (Услуга.ЗаписьКлиента Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаE", typeof(IIS.Fotokiosk.Услуга));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Услуга.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfУслуга CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfУслуга CustomAttributes)
    public class DetailArrayOfУслуга : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Fotokiosk.DetailArrayOfУслуга members)

        // *** End programmer edit section *** (IIS.Fotokiosk.DetailArrayOfУслуга members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Услуга by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Услуга.
        /// </summary>
        public DetailArrayOfУслуга(IIS.Fotokiosk.ЗаписьКлиента fЗаписьКлиента) : 
                base(typeof(Услуга), ((ICSSoft.STORMNET.DataObject)(fЗаписьКлиента)))
        {
        }
        
        public IIS.Fotokiosk.Услуга this[int index]
        {
            get
            {
                return ((IIS.Fotokiosk.Услуга)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Fotokiosk.Услуга dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
