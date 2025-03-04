import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const englishTranslationSet: TranslationSet = {
    trayIconShow: "Zobrazit",
    trayIconSettings: "Nastavení",
    trayIconQuit: "Ukončit",

    userConfirmationProceed: "Pokračovat?",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "Nebyly nalezeny žádné výsledky vyhledávání",

    refreshingIndexesPending: "Aktualizuji indexy",

    ueliCommandClearCaches: "Vymazat mezipaměť",
    ueliCommandClearCachesDescription: "Vymaže všechny mezipaměti všech pluginů",
    ueliCommandEditSettingsFile: "Upravit soubor nastavení",
    ueliCommandEditSettingsFileDescription: "Upravte soubor nastavení pomocí svého výchozího textového editoru",
    ueliCommandExit: "Zavřít",
    ueliCommandExitDescription: "Zavřít ueli",
    ueliCommandOpenSettings: "Nastavení",
    ueliCommandOpenSettingsDescription: "Změnit nastavení",
    ueliCommandRefreshIndexes: "Aktualizovat indexy",
    ueliCommandRefreshIndexesDescription: "Aktualizuje všechny indexy všech pluginů",
    ueliCommandReload: "Obnovit",
    ueliCommandReloadDescription: "Obnovit ueli",

    generalErrorTitle: "Vyskytla se chyba",
    generalErrorDescription: "Další podrobnosti najdete v logu",

    successfullyRefreshedIndexes: "Indexy byly úspěšně obnoveny",
    successfullyClearedCaches: "Mezipaměť byla úspěšně obnovena",
    successfullyUpdatedconfig: "Nastavení bylo úspěšně obnoveno",
    successfullyClearedExecutionLog: "Protokol používání byl úspěšně vymazán",

    commandlineSearchResultDescription: "Provést {{command}}",

    noFavoritesFoundDescription: "Váš protokol používání je prázdný",
    noFavoritesFoundTitle: "Nebyly nalezeny žádné oblíbené položky",

    // settings
    settings: "Nastavení",

    generalSettingsMenuSection: "Obecné nastavení",
    pluginSettingsMenuSection: "Pluginy",

    generalSettings: "Obecné",
    generalSettingsLanguage: "Jazyk",
    generalSettingsLogExecution: "Log execution",
    generalSettingsPersistentUserInput: "Peristent user input",
    generalSettingsAutostartApp: "Automaticky sputit aplikace při startu počítače",
    generalSettingsShowTrayIcon: "Zobrazit ikonu v dolní liště",
    generalSettingsClearCachesOnExit: "Vymazat mezipaměti při ukončení",
    generalSettingsHotKey: "Klávesová zkratka",
    generalSettingsRescanIntervalEnabled: "Pravidelné skenování",
    generalSettingsRescanInterval: "Interval pravidelného skenování (v sekundách)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Vždy zobrazit na primární obrazovce",
    generalSettingsRememberWindowPosition: "Pamatovat pozici okna",
    generalSettingsExportSettings: "Exportovat aktuální nastavení",
    generalSettingsSuccessfullyExportedSettings: "Nastavení úspěšně exportováno",
    generalSettingsImportSettings: "Importovat nastavení",
    generalSettingsImportFileFilterJsonFiles: "JSON soubory",
    generalSettingsImportErrorInvalidConfig: "Import nastavení se nezdařil: Zdá se, že obsah souboru je neplatný",
    generalSettingsResetAllSettings: "Obnovit všechna nastavení",
    generalSettingsResetWarning: "Chystáte se obnovit všechna obecná nastavení na výchozí hodnoty. Chcete pokračovat?",
    generalSettingsResetAllSettingsWarning: "Chystáte se obnovit VŠECHNY nastavení na výchozí. Chcete pokračovat?",
    generalSettingsClearExecutionLogWarning: "Chystáte se vymazat protokol používání. Chcete pokračovat?",
    generalSettingsHideMainWindowAfterExecution: "Skrýt okno po provedení příkazu",
    generalSettingsHideMainWindowOnBlur: "Skrýt okno při přechodu okna do pozadí",
    generalSettingsDecimalSeparator: "Oddělovač desetinných míst",
    generalSettingsCheckingForUpdate: "Kontroluji dostupnost aktualizací",
    generalSettingsDownloadUpdate: "Stáhnout aktualizaci",
    generalSettingsDownloadingUpdate: "Stahuji aktualizaci",
    generalSettingsLatestVersion: "Používate nejnovější verzi.",
    generalSettingsErrorWhileCheckingForUpdate: "Při pokusu o kontrolu aktualizací došlo k chybě",
    clearExecutionLog: "Vymazat záznamy o používání",
    openDebugLog: "Otevřít záznamy pro ladění",
    openTempFolder: "Otevřít složku s dočasnými soubory",

    hotkeyKeyBackspace: "Backspace",
    hotkeyKeyDelete: "Delete",
    hotkeyKeyDown: "Down",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Left",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Return",
    hotkeyKeyRight: "Right",
    hotkeyKeySpace: "Space",
    hotkeyKeyTab: "Tab",
    hotkeyKeyUp: "Up",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Ctrl",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Shift",
    hotkeyModifierSuper: "Super",

    appearanceSettings: "Vzhled",
    appearanceSettingsWindowWidth: "Šířka okna (v pixelech)",
    appearanceSettingsMaxSearchResultsPerPage: "Maximální počet výsledků vyhledávání na stránku",
    appearanceSettingsSearchResultHeight: "Výška výsledku vyhledávání (v pixelech)",
    appearanceSettingsSmoothScrolling: "Plynulé scrollování",
    appearanceSettingsUserInputHeight: "Výška uživatelského vstupu (v pixelech)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Popis zobrazit u všech výsledků vyhledávání",
    appearanceSettingsShowSearchIcon: "Zobrazit ikonu vyhledávání",
    appearanceSettingsShowSearchResultNumbers: "Zobrazovat číslá výsledků vyhledávání",
    appearanceSettingsResetWarningMessage:
        "Chystáte se obnovit všechna nastavení vzhledu na výchozí. Chcete pokračovat?",
    appearanceSettingsAllowTransparentBackground: "Průhledné pozadí",
    appearanceSettingsFontFamily: "Rodina fontů",
    appearanceSettingsUserInputBorderRadius: "Vstup uživatele border radius",
    appearanceSettingsUserInputBottomMargin: "Vstup uživatele bottom margin (v pixelech)",
    appearanceSettingsSearchResultsBorderRadius: "Výsledky vyhledávání border radius",
    appearanceSettingsScrollbarBorderRadius: "Posuvník border radius",
    appearanceSettingsBorderRadiusDescription:
        "Toto je hodnota CSS, takže musíte přidat 'px' jako např. '10px' nebo oddělit rohy, např. '10px 0px 10px 5px'",
    appearanceSettingsUserInputFontWeight: "User Input Font Weight",
    appearanceSettingsSearchResultNameFontWeight: "Search result name font weight",
    appearanceSettingsSearchResultDescriptionFontWeight: "Search result description font weight",
    appearanceSettingsUserInputFontSize: "User input font size",
    appearanceSettingsSearchResultDescriptionFontSize: "Search result name font size",
    appearanceSettingsSearchResultNameFontSize: "Search result description font size",

    settingsUserInputTitle: "Vstup uživatele",
    settingsSearchResultsBoxTitle: "Pole výsledků hledání",
    settingsScrollbarTitle: "Posuvník",
    settingsGeneralTitle: "Obecné",

    colorThemeSettings: "Barevné schéma",
    colorThemeSettingsImportColorTheme: "Importovat barevné schéma",
    colorThemeSettingsExportColorTheme: "Exportovat barevné schéma",
    colorThemeSettingsResetWarning: "Chystáte se obnovit barevné scháma na výchozí. Chcete pokračovat?",
    colorThemeExportSucceeded: "Barevné schéma bylo úspěšně exportováno",
    colorThemeExportFailed: "Export barevného schématu se nezdařil",
    colorThemeImportSucceeded: "Barevné schéma bylo úspěšně importováno",
    colorThemeImportFailed: "Import barevného schématu se nezdařil",
    colorThemeInvalidColorTheme: "Neplatné barevné schéma",
    colorThemePresets: "Přednastavená schémata",
    colorthemeUserInputBackgroundColor: "Barva pozadí uživatelského vstupu",
    colorThemeUserInputTextColor: "Barva textu uživatelského vstupu",
    colorThemeSearchResultsBackgroundColor: "Barva pozadí výsledků vyhledávání",
    colorThemeSearchResultsItemActiveBackgroundColor: "Barva pozadí vybraného výsledku vyhledávání",
    colorThemeSearchResultsItemActiveTextColor: "Barva textu vybraného výsledku vyhledávání",
    colorThemeSearchResultsItemActiveDescriptionColor: "Barva popisu vybraného výsledku vyhledávání",
    colorThemeSearchResutlsItemNameTextColor: "Barva jména výsledků vyhledávání",
    colorThemeSearchResultsItemDescriptionTextColor: "Barva popisů výsledků vyhledávání",
    colorThemeScrollbarForegroundColor: "Barva popředí posuvníků",
    colorThemeScrollbarBackgroundColor: "Barva pozadí posuvníků",

    colorPicker: "Výběr barvy",

    applicationSearchSettings: "Hledání aplikací",
    applicationSearchSettingsDescription: `Tento plugin prohledává aplikace na Vašem počítači. Můžete specifikovat, kde se Vaše aplikace nacházejí a která přípona souboru by měla být použita k rozpoznání aplikace.`,
    applicationSearchSettingsApplicationFolders: "Složky aplikací",
    applicationSearchSettingsApplicationFolder: "Složka aplikací",
    applicationSearchSettingsFolderPath: "Cesta ke složce",
    applicationSearchSettingsRemoveAction: "Odstranit",
    applicationSearchSettingsAddApplicationFolder: "Přidat složku aplikace",
    applicationSearchSettingsApplicationFileExtensions: "Přípony souborů aplikace",
    applicationSearchSettingsApplicationFileExtension: "Přípona souboru",
    applicationSearchSettingsAddApplicationFileExtension: "Přidat příponu souboru",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" není platná přípona souboru`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} není složka"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} neexistuje"`,
    applicationSearchSettingsFolderValidationError: `Při pokusu o ověření došlo k chybě "{{value}}"`,
    applicationSearchSettingsUseNativeIcons: "Používat nativní ikony (vypnutí může vést k lepšímu výkonu)",

    searchEngineSettings: "Vyhledávač",
    searchEngineSettingsDescription: `Vyhledávač se používá pro předindexované položky, jako jsou aplikace, zkratky a nastavení / příkazy operačního systému.`,
    searchEngineSettingsFuzzyness: "Fuzziness",
    searchEngineSettingsFuzzynessDescription: "0 = striktní, 1 = fuzzy",
    searchEngineSettingsStrict: "Striktní",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsBlacklist: "Blacklist",
    searchEngineSettingsMaxSearchResults: "Max výsledků vyhledávání",
    searchEngineSettingsResetWarning:
        "Chystáte se obnovit všechna nastavení vyhledávače na výchozí hodnoty. Chcete pokračovat?",

    shortcutSettings: "Shortcuts",
    shortcutSettingsDescription: `Tento plugin umožňuje rychle otevírat soubory nebo webové stránky nastavením vlastních zkratek.`,
    shortcutSettingsTableType: "Typ",
    shortcutSettingsTableName: "Název",
    shortcutSettingsTableExecutionArgument: "Execution argument",
    shortcutSettingsTableDescription: "Popis",
    shortcutSettingsTableTags: "Značky",
    shortcutSettingsTableIcon: "Ikony",
    shortcutSettingsTableEdit: "Upravit",
    shortcutSettingsTableDelete: "Smazat",
    shortcutSettingsAddShortcut: "Přidat zkratku",
    shortcutSettingsEditModalImageUrl: "URL obrázku",
    shortcutSettingsEditModalSvgString: "SVG řetězec",
    shortcutSettingsEditModalColor: "Barva",
    shortcutSettingsEditModalGoogleWebsite: "Stránka Google",
    shortcutSettingsEditModalDownloadsFolder: "Složka stažených souborů",
    shortcutSettingsEditModalCommand: "Příkaz",
    shortcutSettingsInvalidShortcutErrorMessage: "Neplatná zkratka",
    shortcutSettingsTagPlaceholder: "Přidejte značku a stiskněte klávesu Enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "Příkazový řádek",
    shortcutSettingsEditModalCommandLinetoolDescription: "Upravit soubor in Visual Studio Code",
    shortcutSettingsNeedsUserConfirmation: "Před provedením vyžadovat potvrzení",

    translationSettingsTranslation: "Překlad",
    translationSettingsDescription: `Tento plugin umožňuje rychle překládat slova nebo krátké věty. Používá neoficiální API (https://github.com/imankulov/linguee-api) pro Linguee (https://linguee.de) a může být nestabilní.`,
    translationSettingsDebounceDelay: "Zpoždění (v milisekundách)",
    translationSettingsMinSearchTermLength: "Minimální délka vyhledávacího dotazu",
    translationSettingsPrefix: "Předpona",
    translationSettingsSourceLanguage: "Zdrojový jazyk",
    translationSettingsTargetLanguage: "Cílový jazyk",

    everythingSearch: "Everything",
    everythingSearchSettingDescription: `Tento zásuvný modul umožňuje použít Everything k nalezení souborů a složek v místním systému souborů. Musíte nainstalovat Everything a „Rozhraní příkazového řádku pro Everything z https://www.voidtools.com/downloads/. Po instalaci obou musíte zadat cestu k souboru 'es.exe' níže.`,
    everythingSearchPathToBinary: `Cesta k "es.exe"`,
    everythingSearchPrefix: "Předpona",
    everythingSearchMaxSearchResults: "Max. výsledků vyhledávání",
    everythingSearchPathToBinaryFilterName: "Spustitelné soubory",

    mdfindSearch: "mdfind",
    mdfindSettingsDescription:
        "Tento plugin umožňuje použít nativní vyhledávání v systému MacOS k nalezení souborů a složek v místním systému souborů.",
    mdfindSearchDebounceDelay: "Zpoždění (v milisekundách)",
    mdfindSearchPrefix: "Předpona",
    mdfindSearchMaxSearchResults: "Max. výsledků vyhledávání",

    websearch: "Vyhledávání na webu",
    websearchSettingDescription: `Tento plugin vám umožní rychle prohledávat internet pomocí vašeho oblíbeného vyhledávače na webu nastavením vlastních vyhledávačů na webu.`,
    websearchEngines: "Webové vyhledávače",
    websearchEditingModalTitleAdd: "Přidat vyhledávač",
    websearchEditingModalTitleEdit: "Upravit vyhledávač",
    websearchName: "Název",
    websearchPrefix: "Předpona",
    websearchUrl: "URL",
    websearchSuggestionUrl: "Návrh URL",
    websearchIcon: "Ikona",
    websearchPriority: "Priorita",
    websearchIsFallback: "Záloha",
    websearchEncodeSearchTerm: "Enkódovat dotaz",
    websearchInvalidWebsearchEngine: "Neplatný vyhledávač",
    websearchDescription: `Hledat "{{search_term}}" na {{websearch_engine}}`,

    fileBrowser: "Průzkumník souborů",
    fileBrowserSettingsDescription: `Tento plugin umožňuje procházet místní systém souborů. Chcete-li začít, musíte zadat platnou absolutní cestu.`,
    fileBrowserSettingsMaxSearchResults: "Max. výsledků vyhledávání",
    fileBrowserOptionsShowHiddenFiles: "Zobrazit skryté soubory",
    fileBrowserOptionsBlackList: "Blacklist",
    fileBrowserOptionsBlackListPlaceholder: "Název soubory nebo složky",

    operatingSystemCommands: "Příkazy operačního systému",
    operatingSystemCommandsSettingsDescription: `Příkazy operačního systému jsou jednoduché příkazy pro ovládání operačního systému, např. k vypnutí nebo restartování počítače.`,

    operatingSystemSettings: "Nastavení operačního systému",
    operatingSystemSettingsSettingsDescription: "Tento plugin umožňuje rychle najít nastavení operačního systému.",

    windowsShutdown: "Vypnout",
    windowsShutdownDescription: "Vypnout počítač",
    windowsRestart: "Restartovat",
    windowsRestartDescription: "Restartovat počítač",
    windowsReboot: "Restartujte",
    windowsSignout: "Odhlásit se",
    windowsSignoutDescription: "Odhlásit aktuálního uživatele",
    windowsLock: "Zamknout",
    windowsLockDescription: "Zamknout počítač",
    windowsSleep: "Režim spánku",
    windowsSleepDescription: "Sleep computer",
    windowsHibernation: "Hibernace",
    windowsHibernationDescription: "Hibernovat počítač",

    macOsShutdown: "Vypnout",
    macOsShutdownDescription: "Vypnout mac",
    macOsRestart: "Restartovat",
    macOsRestartDescription: "Restartovat mac",
    macOsLogout: "Odhlásit se",
    macOsLogoutDescription: "Odhlásit aktuálního uživatele",
    macOsLock: "Zamknout",
    macOsLockDescription: "Zamknout mac",
    macOsSleep: "Režim spánku",
    macOsSleepDescription: "Uspat mac",

    calcuator: "Kalkulačka",
    calculatorCopyToClipboard: "Stisknutím klávesy Enter zkopírujete do schránky",
    calculatorDescription: "Tento plugin vám umožňuje rychle provádět jednoduché výpočty.",
    calculatorPrecision: "Přesnost",

    openUrlWithBrowser: "Otevřete pomocí webového prohlížeče",
    url: "URL",
    urlDescription: "Tento plugin umožňuje rychle otevírat webové stránky zadáním adresy URL.",
    urlDefaultProtocol: "Výchozí protokol",

    email: "Email",
    emailSettingsDescription: "Tento plugin umožňuje rychle začít psát e-maily zadáním e-mailové adresy.",
    openNewMail: "Otevřít nový email",

    currencyConverter: "Převodník měn",
    currencyConverterDescription:
        "Tento plugin umožňuje rychle převádět měny. Nejnovější kurzy jsou uvedeny na adrese https://exchangeratesapi.io/.",
    currencyConverterPrecision: "Přesnost",
    currencyConverterCopyToClipboard: "Stisknutím klávesy Enter zkopírujete do schránky",

    workflows: "Workflows",
    workflowSettingsDescription: "Tento plugin umožňuje rychle provádět více věcí najednou.",
    workflowSettingsAddWorkflow: "Přidat workflow",
    workflowName: "Název",
    workflowNamePlaceholder: "Sem zadejte název workflow",
    workflowDescription: "Popis",
    workflowDescriptionPlaceholder: "Sem zadejte popis workflow",
    workflowTags: "Značky",
    workflowIcon: "Ikona",
    workflowExecutionSteps: "Prováděcí kroky",
    workflowExecutionArgumentType: "Argument typu spuštění",
    workflowExecutionArgumentTypeCommandlineTool: "Příkazový řádek",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "Neplatný krok spuštění",
    workflowInvalidWorkflow: "Neplatný workflow",
    workflowNeedsUserConfirmationBeforeExecution: "Před provedením vyžaduje potvrzení",

    commandline: "Příkazový řádek",
    commandlinePrefix: "Předpona",
    commandlineSettingsDescription: "Tento plugin umožňuje rychle provádět příkazy příkazového řádku.",
    commandlineShell: "Shell",

    simpleFolderSearch: "Jednoduché vyhledávání složek",
    simpleFolderSearchDescription: "Tento plugin umožňuje rychle hledat soubory nebo složky",
    simpleFolderSearchRecursive: "Rekurzivní skenování souborů",
    simpleFolderSearchExcludeHiddenFiles: "Vyloučit skryté soubory",
    simpleFolderSearchFolderPath: "Cesta ke složce",
    simpleFolderSearchAddFolder: "Přidat složku",
    simpleFolderSearchEditFolder: "Upravit složku",

    uwpSettingsDescription: "Tento plugin umožňuje najít předinstalované aplikace UWP.",

    colorConverter: "Převodník barev",
    colorConverterDescription: "Tento plugin umožňuje rychle převádět barvy do různých formátů.",
    colorConverterShowColorPreview: "Zobrazit barevný náhled",

    dictionary: "Slovník",
    dictionaryDescription:
        "Tento plugin umožňuje rychle vyhledat definici a synonyma slov. Používá neoficiální rozhraní Google Dictionary API (https://googledicunteapi.eu-gb.mybluemix.net/)",
    dictionaryPrefix: "Předpona",
    dictionaryMinSearchTermLength: "Minimální délka hledaného výrazu",
    dictionaryDebounceDelay: "Zpoždění (v milisekundách)",

    browserBookmarks: "Záložky prohlížeče",
    browserBookmarksDescription: "This plugin enables you to search your browser bookmarks.",
    browserBookmarksBrowser: "Prohlížeč",
    browserBookmarksUseFavicons: "Používat favicons",
    browserBookmark: "Záložka",

    cancel: "Zrušit",
    save: "Uložit",
    add: "Přidat",
    remove: "Odstranit",
    edit: "Upravit",
    forExample: "Například",
    example: "Příklad",
    iconType: "Typ ikony",
    iconTypeColor: "Barva",
    showFullFilePath: "Zobrazit plnou cestu",
    yes: "Ano",
    no: "Ne",
    resetToDefault: "Resetovat na výchozí hodnoty?",
    resetPluginSettingsToDefaultWarning:
        "Chystáte se obnovit všechna nastavení tohoto pluginu na výchozí hodnoty. Chcete pokračovat?",
    filePath: "Cesta k souboru",
    folderPath: "Cesta ke složce",
    chooseFile: "Vyberte soubor",
    chooseFolder: "Vyberte složku",
    restartRequired: "Vyžaduje restartování",

    controlPanel: "Ovládací panely",
    controlPanelSettingsDescription: "Tento plugin umožňuje rychle najít položky ovládacího panelu.",

    weather: "Počasí",
    weatherPrefix: "Předpona",
    weatherSettingsDescription:
        "Tento plugin umožňuje zkontrolovat povětrnostní podmínky v libovolné oblasti. Pokud není k dispozici žádná oblast, je ve výchozím nastavení možné zobrazit počasí aktuální polohy. Údaje poskytuje wttr.in",
    weatherTemperatureUnit: "Jednotka teploty",
    weatherCopyToClipboard: "Stisknutím klávesy Enter zkopírujete do schránky",
};
