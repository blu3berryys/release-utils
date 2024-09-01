import { create } from 'xmlbuilder2';

const templateMetadata = `
<?xml version="1.0" encoding="UTF-8"?>
<component type="desktop-application">
    <id>io.github.zen_browser.zen</id>
    <url type="homepage">https://get-zen.vercel.app</url>
    <content_rating type="oars-1.1" />
    <developer id="io.github.zen_browser.zen">
        <name>Zen Team</name>
    </developer>

    <name>Zen Browser</name>
    <summary>A fast, beautifull browser</summary>

    <metadata_license>MIT</metadata_license>
    <project_license>MPL-2.0</project_license>

    <description>
        <p>Zen Browser is a firefox based browser that will change the way you surf the web!</p>

        <ul>
            <li>Split views</li>
            <li>Web Sidebar</li>
            <li>Tab Groups</li>
            <li>Customizable UI</li>
            <li>Vertical Tabs</li>
            <li>And more...</li>
        </ul>
    </description>

    <releases>
    </releases>

    <launchable type="desktop-id">io.github.zen_browser.zen.desktop</launchable>
    <screenshots>
        <screenshot type="default">
            <image>https://raw.githubusercontent.com/zen-browser/www/main/public/browser-1.png</image>
        </screenshot>
        <screenshot>
            <image>https://raw.githubusercontent.com/zen-browser/www/main/public/browser-2.png</image>
        </screenshot>
        <screenshot>
            <image>https://raw.githubusercontent.com/zen-browser/www/main/public/browser-3.png</image>
        </screenshot>
        <screenshot>
            <image>https://raw.githubusercontent.com/zen-browser/www/main/public/browser-4.png</image>
        </screenshot>
    </screenshots>

    <branding>
        <color type="primary" scheme_preference="light">#d9d9d9</color>
        <color type="primary" scheme_preference="dark">#f5f5f5</color>
    </branding>
</component>
`;


const metadata = create(templateMetadata);

