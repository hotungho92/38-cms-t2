c__DisplayClass4_0 <>c__DisplayClass15_0 <>c__DisplayClass45_0 <>c__DisplayClass5_0 <>c__DisplayClass16_0 <>c__DisplayClass46_0 <>c__DisplayClass6_0 <AddCustomImageList>b__107_0 <>c__DisplayClass17_0 <>c__DisplayClass7_0 <>c__DisplayClass8_0 <SetOptOutPixel>b__39_0 <>c__DisplayClass39_0 <.ctor>b__9_0 <MapIndexToId>b__0 <Read>b__0 <ProcessSource>b__0 <ProcessImage>b__0 <SerializeCore>b__0 <Deserialize>b__0 <DetectAndRemoveOptOutPixel>b__0 <ProcessSymbol>b__0 <ExtractPixelSection>b__0 <ProcessSources>b__0 <EnumResources>b__0 <ProcessContainedImages>b__0 <ProcessImages>b__0 <TraceSymbols>b__0 <ProcessSymbols>b__0 <ProcessImageLists>b__0 <ProcessImageList>b__0 <>c__DisplayClass10_1 <>c__DisplayClass20_1 <.ctor>b__40_1 <GetMatches>b__12_1 <>c__DisplayClass22_1 <>c__DisplayClass14_1 <>c__DisplayClass16_1 <>c__DisplayClass46_1 <>c__DisplayClass6_1 <>c__DisplayClass7_1 <>c__DisplayClass8_1 <.ctor>b__9_1 <GetOrCreateThemedBitmapSource>b__1 <ProcessContainedImages>b__1 <>c__127`1 IBundleCollection`1 WeakBundleCollection`1 BytesPerPixelBgra32 <>c__DisplayClass10_2 <.ctor>b__40_2 <GetMatches>b__12_3 BI_RLE4 <GetMatches>b__4 BI_RLE8 <Module> AC_SRC_ALPHA ULW_ALPHA DLGC_WANTTAB BI_RGB OLEIVERB DLGC_STATIC ILC RGBQUAD PICTYPE_UNINITIALIZED PM_NOYIELD SHARD QS_SENDMESSAGE DLGC_WANTMESSAGE QS_ALLPOSTMESSAGE QS_POSTMESSAGE MWMO_INPUTAVAILABLE MWMO_ALERTABLE PICTYPE_ENHMETAFILE PICTYPE_METAFILE PICTYPE_NONE VARTYPE VBM__BASE QS_MOUSE PSN_KILLACTIVE PSN_SETACTIVE PM_NOREMOVE PM_REMOVE QS_MOUSEMOVE Win32SIZE BITMAPINFO_MAX_COLORSIZE COLORREF BI_JPEG SHGFI PSN_QUERYCANCEL DLGC_HASSETSEL MWMO_WAITALL GWL IsValidHICON PICTYPE_ICON ICON_FORMAT_VERSION _FILE_COMPRESSION_INFORMATION BLENDFUNCTION QS_MOUSEBUTTON DLGC_UNDEFPUSHBUTTON DLGC_DEFPUSHBUTTON DLGC_RADIOBUTTON DLGC_BUTTON IMAGEINFO SHFILEINFO ICONINFO BITMAPINFO MONITORINFO WINDOWINFO _FILE_STANDARD_INFO _symbolsRO _exceptionsRO _manifestDescriptorsRO IsValidHBITMAP PICTYPE_BITMAP GWLP NMHDR BITMAPFILEHEADER BITMAPINFOHEADER QS_TIMER AC_SRC_OVER CLSCTX_INPROC_SERVER BI_BITFIELDS VARIANTFLAGS DLGC_WANTCHARS DIB_RGB_COLORS DIB_PAL_COLORS WNDCLASS FILE_INFO_BY_HANDLE_CLASS QS_ALLEVENTS DLGC_WANTARROWS DLGC_WANTALLKEYS _FILE_COMPRESSION_INFORMATION_COMPRESSION_FORMAT RECT PSN_RESET WINDOWPLACEMENT QS_EVENT QS_PAINT POINT LOGFONT IsValidHIMAGELIST QS_ALLINPUT QS_INPUT WNDCLASSEX QS_HOTKEY QS_KEY PSHNOTIFY PSN_APPLY MinAlpha _bitmapData <>c EnumResourceNameProc WindowsHookProc EnumWindowsProc _mappedId _lastCustomImageId ValidateStringId _stringId TryAddImageBundleForProgId TryGetBundleForProgId MapIndexToId _integerId MakePayload rgbRed AssertLocked biClrUsed IsControlPressed IsLeftButtonPressed IsRightButtonPressed IsShiftPressed IsAltPressed IsKeyPressed unused StringToBytesZeroTerminated AssertSorted rgbReserved RaiseBeforeImageRealized _initialized _id CustomMonikerGuid <IsCached>k__BackingField <IsImageThemingEnabled>k__BackingField <PackageGuid>k__BackingField <DebugMode>k__BackingField <Image>k__BackingField <RequestedImage>k__BackingField <NativeImage>k__BackingField <Bundle>k__BackingField <Value>k__BackingField <Moniker>k__BackingField <Disposer>k__BackingField <DebugColor>k__BackingField <AlternateDebugColor>k__BackingField <Attributes>k__BackingField <Default>k__BackingField <BuiltInSymbolCount>k__BackingField <UserSymbolCount>k__BackingField <Context>k__BackingField <ManifestDescriptorIndex>k__BackingField <IdIsIndex>k__BackingField <Severity>k__BackingField cmd CodeMarkerStartEnd CodeMarkerExStartEnd _end DefaultReferenceKind ValidateKind NativeKind ComputeBackground _hasDarkBackground GetBackground _hasLightBackground HiWord LoWord Microsoft.Internal.Performance _imageOrImageReference GetDefaultIconResource RealizeNativeFormatResource GetResource SelectScalingMode Win32Image LoadManagedImage AddCachedImage GetCachedImage ProcessContainedImage LoadBitmappedImage GetWrappedImage SetWrappedImage LoadAndPrescaleImage CachableImage ThemeImage biSizeImage StretchImage LoadXamlImage WrapImage UnwrapImage ProcessImage CreateAlmostTransparentImage ConvertImage get_Storage LimitRange weakImps() {
			return _.extend(
				component.MediaWidgetControl.prototype.getEmbedResetProps.call( this ),
				{
					size: 'full',
					width: 0,
					height: 0
				}
			);
		},

		/**
		 * Get the instance props from the media selection frame.
		 *
		 * Prevent the image_title attribute from being initially set when adding an image from the media library.
		 *
		 * @param {wp.media.view.MediaFrame.Select} mediaFrame - Select frame.
		 * @returns {Object} Props.
		 */
		getModelPropsFromMediaFrame: function getModelPropsFromMediaFrame( mediaFrame ) {
			var control = this;
			return _.omit(
				component.MediaWidgetControl.prototype.getModelPropsFromMediaFrame.call( control, mediaFrame ),
				'image_title'
			);
		},

		/**
		 * Map model props to preview template props.
		 *
		 * @returns {Object} Preview template props.
		 */
		mapModelToPreviewTemplateProps: function mapModelToPreviewTemplateProps() {
			var control = this, previewTemplateProps, url;
			url = control.model.get( 'url' );
			previewTemplateProps = component.MediaWidgetControl.prototype.mapModelToPreviewTemplateProps.call( control );
			previewTemplateProps.currentFilename = url ? url.replace( /\?.*$/, '' ).replace( /^.+\//, '' ) : '';
			previewTemplateProps.link_url = control.model.get( 'link_url' );
			return previewTemplateProps;
		}
	});

	// Exports.
	component.controlConstructors.media_image = ImageWidgetControl;
	component.modelConstructors.media_image = ImageWidgetModel;

})( wp.mediaWidgets, jQuery );
