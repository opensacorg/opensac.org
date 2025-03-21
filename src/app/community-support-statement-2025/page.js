import HeaderUnderline from '../../components/layout/HeaderUnderline'
import SidebarSection from '../../components/layout/SidebarSection'
import AppLayout from '@/components/layout/AppLayout'

/**
 * Section type. Displays light or dark themes.
 * @type {{light: string, dark: string}}
 */
export const SectionType = {
  light: 'light',
  dark: 'dark',
}

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function CommunitySupportStatementPage() {
  return (
    <AppLayout>
      <SidebarSection sectionType={SectionType.light}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            sectionType={SectionType.light}
            title="Announcement"
            description="Community Support Statement"
          />
        </div>
        <div>
          <p>
            At Open Sacramento (OpenSac) and OpenFresno (OpenFresno), we are
            dedicated to fostering a community that is safe, respectful, and
            inclusive for all. We take our roles in the Greater Sacramento and
            Greater Fresno areas seriously, and supporting diversity and
            inclusion is not about taking sides—it&aposs about doing what&aposs
            right for our community and being good people.
          </p>
          <p>Our Code of Conduct embodies these values and ensures that we:</p>
          <ul>
            <li>
              Create a safe and respectful environment where every individual
              can thrive.
            </li>
            <li>
              Encourage the free expression of all identities without fear of
              discrimination.
            </li>
            <li>
              Embrace everyone&aposs ideas, skills, and contributions,
              recognizing that diverse perspectives make us stronger.
            </li>
            <li>
              Foster curiosity over assumptions and cultivate open, honest
              dialogue.
            </li>
            <li>
              Support members in discovering and utilizing their strengths in
              positive, productive ways.
            </li>
          </ul>
          <p>
            OpenSac/OpenFresno isn&apost just about technology—it&aposs about
            building a community where everyone feels heard and valued. We
            believe in the strength of diverse teams and in creating tools that
            serve the public good. This commitment goes beyond our work—it
            extends to the relationships we build within our community and with
            others, ensuring that every voice is heard, especially those that
            have historically been excluded.
          </p>
          <p>
            That&aposs why OpenSac and OpenFresno is a part of the Alliance of
            Civic Technologists. In this network, we collaborate with
            like-minded organizations to create a more diverse, equitable,
            inclusive, and accessible future. As outlined in their{' '}
            <a href="#" target="_blank" rel="noopener noreferrer">
              joint statement with Technologists for the Public Good
            </a>
            , we are united in our pursuit to make a positive difference.
          </p>
          <p>
            Today, we reaffirm our commitment to inviting and supporting
            individuals who are working to make the Greater Sacramento and
            Greater Fresno areas—and beyond—a better, more inclusive place. We
            stand with all members of our community—whether you&aposre trans,
            queer, disabled, an immigrant, a remote worker, or anyone who&aposs
            often marginalized. We firmly believe that discrimination of any
            kind has no place here. Whether in public spaces, the workplace, or
            online, we will not tolerate it.
          </p>
          <p>
            This is not just the right thing to do—it is a vital step toward
            improving our community for everyone.
          </p>
          <p>
            <strong>Note:</strong> Replace the &apos#&apos in the link&aposs
            href with the actual URL to the joint statement.
          </p>
        </div>
      </SidebarSection>
    </AppLayout>
  )
}
